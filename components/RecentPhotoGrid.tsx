import Link from 'next/link'
import Image from '@/components/Image'
import { photos } from '@/data/photoUtils'
import { pickRecentPhotos } from '@/data/recentPhotos'

/**
 * Home "recent photos" grid.
 *
 * Landscape = 1 row, portrait = 2 rows, `grid-auto-flow: dense`. Which photos are shown is
 * chosen by pickRecentPhotos() so the set tiles into a complete rectangle at every column
 * count used here (2 below md, 3 from md), so the bottom edge is always flush.
 * Keep the column counts in sync with GRID_COLUMNS in data/recentPhotos.ts.
 *
 * Row height is derived from the column width (container query units) so a 3:2 landscape and
 * a 2:3 portrait both get cells close to their own shape. object-cover then crops only a few
 * percent.
 */
const recentMobile = pickRecentPhotos(photos, { max: 9, columns: [2] })
const recentDesktop = pickRecentPhotos(photos, { max: 9, columns: [3] })

const ROW_RATIO = 0.7

const gridStyle = {
  gridTemplateColumns: 'repeat(var(--cols), minmax(0, 1fr))',
  gridAutoRows: `calc((100cqw - (var(--cols) - 1) * var(--gap)) / var(--cols) * ${ROW_RATIO})`,
} as const

function Grid({ items, className }: { items: typeof recentMobile; className: string }) {
  return (
    <div
      style={gridStyle}
      className={`grid [--gap:0.75rem] sm:[--gap:1rem] gap-[var(--gap)] [grid-auto-flow:dense] ${className}`}
    >
      {items.map((photo, i) => (
        <Link
          key={photo.id}
          href={`/photos/${photo.id}`}
          className={`group bg-surface relative block overflow-hidden ${
            photo.isVertical ? 'row-span-2' : ''
          }`}
        >
          <Image
            src={photo.imgSrc}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 310px, (min-width: 768px) 33vw, (min-width: 640px) 45vw, 50vw"
            priority={i < 3}
            className="object-cover"
          />
          <span className="bg-text/55 text-bg pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 px-3 py-2 text-left opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
            <span className="block font-serif text-sm leading-tight">{photo.title}</span>
            {photo.location && <span className="block text-xs opacity-80">{photo.location}</span>}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default function RecentPhotoGrid() {
  return (
    <div className="[container-type:inline-size]">
      <Grid items={recentMobile} className="[--cols:2] md:hidden" />
      <Grid items={recentDesktop} className="hidden [--cols:3] md:grid" />
    </div>
  )
}
