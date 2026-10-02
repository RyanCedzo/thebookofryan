'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Image from '@/components/Image'
import PhotoTile, { photoGridClass } from '@/components/PhotoTile'
import PageHeader from '@/components/PageHeader'
import { photos, getLocation } from '@/data/photoUtils'
import type { PhotoEntry } from '@/data/types/photo'

/**
 * Filters are data-driven: to add one (lens, trip, tags...), add an entry here
 * and make sure PhotoEntry exposes the value.
 */
interface FilterDef {
  param: string
  label: string
  all: string
  get: (p: PhotoEntry) => string | undefined
  order?: 'alpha' | 'desc'
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const FILTERS: FilterDef[] = [
  { param: 'location', label: 'Location', all: 'All locations', get: (p) => p.region, order: 'alpha' },
  { param: 'camera', label: 'Camera', all: 'All cameras', get: (p) => p.camera, order: 'alpha' },
  { param: 'year', label: 'Year', all: 'All years', get: (p) => p.year, order: 'desc' },
  { param: 'month', label: 'Month', all: 'All months', get: (p) => p.month },
]

const SORTS = [
  { value: 'newest', label: 'Newest first' },
  { value: 'oldest', label: 'Oldest first' },
  { value: 'location', label: 'Location A–Z' },
]

function optionsFor(def: FilterDef) {
  const values = [...new Set(photos.map(def.get).filter((v): v is string => Boolean(v)))]
  if (def.param === 'month') return MONTHS.filter((m) => values.includes(m))
  if (def.order === 'desc') return values.sort((a, b) => b.localeCompare(a))
  return values.sort((a, b) => a.localeCompare(b))
}

const selectClass =
  'custom-select cursor-pointer appearance-none border-0 border-b border-border bg-transparent py-1 pr-5 pl-0 text-sm text-text focus:border-accent focus:ring-0 bg-[length:12px] bg-[right_center] bg-no-repeat'

const chevron =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%238a857e'%3E%3Cpath d='M5.2 7.2a.75.75 0 011.06.02L10 11.3l3.7-4.08a.75.75 0 111.1 1.02l-4.25 4.65a.75.75 0 01-1.1 0L5.2 8.26a.75.75 0 01.02-1.06z'/%3E%3C/svg%3E\")"

export default function PhotosPageClient() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [openId, setOpenId] = useState<string | null>(null)

  const sort = searchParams.get('sort') ?? 'newest'
  const place = searchParams.get('place') ?? ''
  const placeInfo = getLocation(place)

  const setParam = useCallback(
    (key: string, value: string) => {
      const next = new URLSearchParams(searchParams.toString())
      if (value && !(key === 'sort' && value === 'newest')) next.set(key, value)
      else next.delete(key)
      const qs = next.toString()
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
    },
    [pathname, router, searchParams]
  )

  const options = useMemo(() => Object.fromEntries(FILTERS.map((f) => [f.param, optionsFor(f)])), [])

  const filtered = useMemo(() => {
    const list = photos.filter(
      (p) =>
        (!place || p.locationId === place) &&
        FILTERS.every((f) => {
          const v = searchParams.get(f.param)
          return !v || f.get(p) === v
        })
    )
    if (sort === 'oldest') return [...list].reverse()
    if (sort === 'location')
      return [...list].sort(
        (a, b) =>
          (a.region ?? '').localeCompare(b.region ?? '') || (a.dateISO < b.dateISO ? 1 : -1)
      )
    return list
  }, [place, searchParams, sort])

  const hasFilters =
    Boolean(place) || sort !== 'newest' || FILTERS.some((f) => searchParams.get(f.param))

  const openIndex = openId ? filtered.findIndex((p) => p.id === openId) : -1
  const current = openIndex >= 0 ? filtered[openIndex] : null

  const step = useCallback(
    (dir: 1 | -1) => {
      if (openIndex < 0 || filtered.length === 0) return
      setOpenId(filtered[(openIndex + dir + filtered.length) % filtered.length].id)
    },
    [filtered, openIndex]
  )

  useEffect(() => {
    if (!current) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, step])

  const currentLoc = current ? getLocation(current.locationId) : undefined

  return (
    <>
      <PageHeader title="Photos">
        <p>Film and digital, mostly from the road.</p>
      </PageHeader>

      <form
        aria-label="Filter and sort photos"
        className="mb-8 flex flex-wrap items-end gap-x-6 gap-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {FILTERS.map((f) => (
          <label key={f.param} className="flex flex-col gap-1">
            <span className="meta uppercase">{f.label}</span>
            <select
              value={searchParams.get(f.param) ?? ''}
              onChange={(e) => setParam(f.param, e.target.value)}
              className={selectClass}
              style={{ backgroundImage: chevron }}
            >
              <option value="">{f.all}</option>
              {options[f.param].map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </label>
        ))}
        <label className="flex flex-col gap-1">
          <span className="meta uppercase">Sort</span>
          <select
            value={sort}
            onChange={(e) => setParam('sort', e.target.value)}
            className={selectClass}
            style={{ backgroundImage: chevron }}
          >
            {SORTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
        {hasFilters && (
          <button
            type="button"
            onClick={() => router.replace(pathname, { scroll: false })}
            className="text-accent-strong pb-1 text-sm underline underline-offset-4"
          >
            Clear
          </button>
        )}
      </form>

      {place && (
        <p className="mb-6 text-sm">
          <span className="text-muted">Photos from </span>
          <span className="font-serif text-base">{placeInfo?.title ?? place}</span>
          {placeInfo && (
            <>
              {' · '}
              <Link
                href={`/travel?pin=${place}`}
                className="text-accent-strong underline underline-offset-4"
              >
                View on map
              </Link>
            </>
          )}
        </p>
      )}

      <p className="meta mb-4" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? 'photo' : 'photos'}
      </p>

      {filtered.length === 0 ? (
        <p className="text-muted py-12">No photos match these filters.</p>
      ) : (
        <div className={photoGridClass}>
          {filtered.map((photo, i) => (
            <PhotoTile
              key={photo.id}
              photo={photo}
              priority={i < 3}
              onOpen={() => setOpenId(photo.id)}
            />
          ))}
        </div>
      )}

      <Dialog open={Boolean(current)} onClose={() => setOpenId(null)} className="relative z-60">
        <div className="bg-bg/95 fixed inset-0" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto">
          {current && (
            <DialogPanel className="mx-auto flex min-h-full max-w-5xl flex-col px-5 py-6 sm:px-8">
              <div className="flex items-center justify-between pb-4">
                <p className="meta">
                  {openIndex + 1} / {filtered.length}
                </p>
                <button
                  type="button"
                  onClick={() => setOpenId(null)}
                  className="text-muted hover:text-text text-sm"
                >
                  Close
                </button>
              </div>

              <div className="relative h-[60vh] w-full sm:h-[68vh]">
                <Image
                  src={current.imgSrc}
                  alt={current.alt}
                  fill
                  sizes="(min-width: 1024px) 960px, 100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
                <div className="max-w-prose">
                  <DialogTitle as="h2" className="font-serif text-2xl">
                    {current.title}
                  </DialogTitle>
                  <p className="meta mt-1">
                    {[current.date, current.camera, current.location].filter(Boolean).join(' · ')}
                  </p>
                  {current.description && <p className="mt-3">{current.description}</p>}
                  <p className="mt-3 flex flex-wrap gap-x-5 text-sm">
                    {current.locationId && (
                      <Link
                        href={`/travel?pin=${current.locationId}`}
                        className="text-accent-strong underline underline-offset-4"
                      >
                        View {currentLoc?.title ?? 'location'} on map
                      </Link>
                    )}
                    <Link
                      href={`/photos/${current.id}`}
                      className="text-muted hover:text-text underline underline-offset-4"
                    >
                      Photo page
                    </Link>
                  </p>
                </div>
                <div className="flex gap-5 text-sm">
                  <button type="button" onClick={() => step(-1)} className="text-muted hover:text-text">
                    &larr; Prev
                  </button>
                  <button type="button" onClick={() => step(1)} className="text-muted hover:text-text">
                    Next &rarr;
                  </button>
                </div>
              </div>
            </DialogPanel>
          )}
        </div>
      </Dialog>
    </>
  )
}
