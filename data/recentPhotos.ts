/**
 * Picks the photos for the Home "recent photos" grid so the grid always ends flush.
 *
 * Layout model (must match components/RecentPhotoGrid.tsx):
 *  - a CSS grid with `grid-auto-flow: dense`
 *  - landscape = 1 column x 1 row, portrait = 1 column x 2 rows
 *  - 2 columns below `md`, 3 columns from `md` up (GRID_COLUMNS)
 *
 * We simulate the browser's dense auto-placement for each column count and only accept a
 * set of photos that fills a complete rectangle at every column count, so no portrait can
 * hang below its neighbours at any width.
 *
 * Selection stays newest-first: we look for the fewest skipped photos, preferring to trim
 * the oldest candidates (so the usual answer is simply "the newest N").
 */

export const GRID_COLUMNS = [2, 3] as const

type Oriented = { isVertical: boolean }

interface Options {
  /** Most photos to show */
  max?: number
  /** Prefer at least this many photos; go lower only if no flush set of this size exists */
  preferredMin?: number
  /** Below preferredMin, still prefer at least this many before going lower */
  acceptableMin?: number
  /** How many of the newest photos to consider */
  window?: number
  columns?: readonly number[]
}

/**
 * Simulates `grid-auto-flow: dense` placement of 1xN items.
 * `complete`: every cell in the used rows is filled. `flush`: every occupied column ends on
 * the last row (nothing hangs below, nothing stops short).
 */
function place(vertical: boolean[], cols: number) {
  const rows: boolean[][] = []
  const colBottom = new Array<number>(cols).fill(0)
  const fits = (r: number, c: number, span: number) => {
    for (let i = 0; i < span; i++) if (rows[r + i]?.[c]) return false
    return true
  }

  for (const isVertical of vertical) {
    const span = isVertical ? 2 : 1
    let done = false
    // Dense packing: every item restarts the scan from the top-left cell
    for (let r = 0; !done; r++) {
      for (let c = 0; c < cols && !done; c++) {
        if (!fits(r, c, span)) continue
        for (let i = 0; i < span; i++) {
          rows[r + i] ??= new Array<boolean>(cols).fill(false)
          rows[r + i][c] = true
        }
        colBottom[c] = Math.max(colBottom[c], r + span)
        done = true
      }
    }
  }

  const height = rows.length
  const complete = rows.every((row) => row.every(Boolean))
  const used = colBottom.filter((b) => b > 0)
  const flush = used.length > 0 && used.every((b) => b === height)
  return { complete, flush }
}

/** Strict: a full rectangle (no gaps, no ragged last row) */
const isFullRectangle = (vertical: boolean[], cols: number) => {
  const { complete, flush } = place(vertical, cols)
  return complete && flush
}

/**
 * Relaxed (only used when there are too few photos for a full rectangle): the occupied
 * columns still all end on the same row, but a column may be empty.
 */
const isFlushBottom = (vertical: boolean[], cols: number) => place(vertical, cols).flush

/**
 * Finds `size` photos from `pool` (newest first) that pass `ok`, skipping exactly `skip` of
 * the photos newer than the last one chosen. Skips the oldest candidates first.
 */
function trySkip<T extends Oriented>(
  pool: T[],
  size: number,
  skip: number,
  ok: (vertical: boolean[]) => boolean
): T[] | null {
  const last = size - 1 + skip
  if (last >= pool.length) return null

  const skipped = new Set<number>()
  // Choose which `skip` indices in [0, last) to drop, largest indices first
  const walk = (from: number, remaining: number): T[] | null => {
    if (remaining === 0) {
      const chosen = pool.slice(0, last + 1).filter((_, i) => !skipped.has(i))
      return ok(chosen.map((p) => p.isVertical)) ? chosen : null
    }
    for (let i = from; i >= remaining - 1; i--) {
      skipped.add(i)
      const hit = walk(i - 1, remaining - 1)
      skipped.delete(i)
      if (hit) return hit
    }
    return null
  }

  return walk(last - 1, skip)
}

/**
 * @param photos newest first
 */
export function pickRecentPhotos<T extends Oriented>(
  photos: T[],
  { max = 9, preferredMin = 7, acceptableMin = 5, window = 14, columns = GRID_COLUMNS }: Options = {}
): T[] {
  const pool = photos.slice(0, window)
  const top = Math.min(max, pool.length)
  const range = (from: number, to: number) =>
    Array.from({ length: Math.max(0, from - to + 1) }, (_, i) => from - i)

  const sizeGroups = [
    range(top, preferredMin),
    range(Math.min(top, preferredMin - 1), acceptableMin),
    range(Math.min(top, acceptableMin - 1), 1),
  ]

  for (const check of [isFullRectangle, isFlushBottom]) {
    const ok = (v: boolean[]) => columns.every((c) => check(v, c))
    for (const sizes of sizeGroups) {
      // Fewest skipped photos wins; ties go to the larger set
      for (let skip = 0; skip < pool.length; skip++) {
        for (const size of sizes) {
          const hit = trySkip(pool, size, skip, ok)
          if (hit) return hit
        }
      }
    }
  }

  // Unreachable in practice (a single photo always qualifies), kept as a safe default
  return pool.slice(0, 1)
}
