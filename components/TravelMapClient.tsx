'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Image from '@/components/Image'
import travelData, { type TravelLocation } from '@/data/travelData'
import { getPhotosForLocation } from '@/data/photoUtils'

const TYPES: TravelLocation['type'][] = ['National Park', 'State Park', 'City', 'Other']

const bounds = L.latLngBounds(travelData.map((t) => [t.lat, t.lng] as [number, number]))

const photoCounts = new Map(travelData.map((t) => [t.slug, getPhotosForLocation(t.slug).length]))

const iconCache = new Map<string, L.DivIcon>()
function pinIcon(hasPhotos: boolean, active: boolean) {
  const key = `${hasPhotos}-${active}`
  let icon = iconCache.get(key)
  if (!icon) {
    icon = L.divIcon({
      className: `pin ${hasPhotos ? 'pin--photos' : ''} ${active ? 'pin--active' : ''}`,
      html: '<span class="pin__dot"></span>',
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    })
    iconCache.set(key, icon)
  }
  return icon
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Moves the map when the selected place changes (and resets when it is cleared). */
function Focus({ target }: { target?: TravelLocation }) {
  const map = useMap()
  const hadTarget = useRef(false)

  useEffect(() => {
    const animate = !prefersReducedMotion()
    if (target) {
      hadTarget.current = true
      const zoom = Math.max(map.getZoom(), 8)
      if (animate) map.flyTo([target.lat, target.lng], zoom, { duration: 0.8 })
      else map.setView([target.lat, target.lng], zoom)
    } else if (hadTarget.current) {
      hadTarget.current = false
      map.fitBounds(bounds, { padding: [32, 32], animate })
    }
  }, [target, map])

  return null
}

const dateLines = (t: TravelLocation) =>
  t.isCurrent ? [] : t.date.split('\n').map((s) => s.replace(/,$/, '').trim()).filter(Boolean)

export default function TravelMapClient() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const panelRef = useRef<HTMLElement>(null)

  const [query, setQuery] = useState('')
  const [types, setTypes] = useState<TravelLocation['type'][]>(TYPES)

  const pin = searchParams.get('pin')
  const selected = useMemo(() => travelData.find((t) => t.slug === pin), [pin])

  const select = useCallback(
    (slug: string | null, scrollPanel = false) => {
      router.replace(slug ? `${pathname}?pin=${slug}` : pathname, { scroll: false })
      if (slug && scrollPanel && window.matchMedia('(max-width: 1023px)').matches) {
        requestAnimationFrame(() =>
          panelRef.current?.scrollIntoView({
            block: 'start',
            behavior: prefersReducedMotion() ? 'auto' : 'smooth',
          })
        )
      }
    },
    [pathname, router]
  )

  const places = useMemo(() => {
    const q = query.trim().toLowerCase()
    return [...travelData]
      .filter((t) => types.includes(t.type))
      .filter((t) => !q || t.title.toLowerCase().includes(q))
      .sort((a, b) => a.title.localeCompare(b.title))
  }, [query, types])

  const visible = useMemo(
    () => (selected && !places.includes(selected) ? [...places, selected] : places),
    [places, selected]
  )

  const toggleType = (t: TravelLocation['type']) =>
    setTypes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))

  const selectedPhotos = selected ? getPhotosForLocation(selected.slug) : []

  return (
    <div className="border-border lg:grid lg:grid-cols-[21rem_1fr] border">
      {/* Map */}
      <div className="relative h-[60vh] min-h-[360px] lg:order-2 lg:h-[calc(100dvh-13rem)] lg:min-h-[560px]">
        <MapContainer
          bounds={bounds}
          boundsOptions={{ padding: [32, 32] }}
          scrollWheelZoom
          className="h-full w-full"
          zoomControl
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
          />
          <Focus target={selected} />
          {visible.map((t) => (
            <Marker
              key={t.slug}
              position={[t.lat, t.lng]}
              title={t.title}
              icon={pinIcon((photoCounts.get(t.slug) ?? 0) > 0, t.slug === selected?.slug)}
              zIndexOffset={t.slug === selected?.slug ? 1000 : 0}
              eventHandlers={{ click: () => select(t.slug, true) }}
            >
              <Tooltip direction="top" offset={[0, -10]}>
                {t.title}
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
        <p className="bg-bg/90 text-muted pointer-events-none absolute bottom-6 left-3 z-[500] px-2 py-1 text-xs">
          <span className="bg-secondary mr-1.5 inline-block h-2 w-2 rounded-full align-middle" />
          has photos
          <span className="bg-accent mr-1.5 ml-3 inline-block h-2 w-2 rounded-full align-middle" />
          no photos yet
        </p>
      </div>

      {/* Panel */}
      <aside
        ref={panelRef}
        aria-label={selected ? selected.title : 'Places'}
        className="border-border bg-bg scroll-mt-4 border-t lg:order-1 lg:h-[calc(100dvh-13rem)] lg:min-h-[560px] lg:overflow-y-auto lg:border-t-0 lg:border-r"
      >
        {selected ? (
          <div className="p-5">
            <button
              type="button"
              onClick={() => select(null)}
              className="text-muted hover:text-text text-sm"
            >
              &larr; All places
            </button>

            <h2 className="mt-4 font-serif text-2xl leading-tight">{selected.title}</h2>
            <p className="meta mt-1">
              {[selected.type, ...dateLines(selected)].join(' · ')}
            </p>

            {selected.imgSrc && (
              <div className="bg-surface relative mt-4 aspect-[3/2] w-full overflow-hidden">
                <Image
                  src={selected.imgSrc}
                  alt={selected.title}
                  fill
                  sizes="(min-width: 1024px) 336px, 100vw"
                  className="object-cover"
                />
              </div>
            )}
            <p className="mt-4">{selected.description}</p>

            <section className="mt-6" aria-labelledby="place-photos">
              <h3 id="place-photos" className="meta uppercase">
                Photos from here
              </h3>
              {selectedPhotos.length > 0 ? (
                <>
                  <ul className="mt-3 grid grid-cols-3 gap-2">
                    {selectedPhotos.slice(0, 9).map((p) => (
                      <li key={p.id}>
                        <Link
                          href={`/photos/${p.id}`}
                          className="bg-surface relative block aspect-square overflow-hidden"
                        >
                          <Image
                            src={p.imgSrc}
                            alt={p.alt}
                            fill
                            sizes="110px"
                            className="object-cover"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/photos?place=${selected.slug}`}
                    className="text-accent-strong mt-3 inline-block text-sm underline underline-offset-4"
                  >
                    All {selectedPhotos.length} {selectedPhotos.length === 1 ? 'photo' : 'photos'}{' '}
                    &rarr;
                  </Link>
                </>
              ) : (
                <p className="text-muted mt-2 text-sm">No photos linked to this place yet.</p>
              )}
            </section>

            <p className="mt-6 text-sm">
              <Link
                href={`/travel/${selected.slug}`}
                className="text-muted hover:text-text underline underline-offset-4"
              >
                Place page
              </Link>
            </p>
          </div>
        ) : (
          <div className="p-5">
            <h2 className="font-serif text-xl">Places</h2>
            <p className="meta mt-0.5">
              {places.length} of {travelData.length}
            </p>

            <label className="mt-4 block">
              <span className="sr-only">Search places</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search places"
                className="border-border focus:border-accent w-full border-0 border-b bg-transparent px-0 py-1.5 text-sm focus:ring-0"
              />
            </label>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm" role="group" aria-label="Filter by type">
              {TYPES.map((t) => {
                const on = types.includes(t)
                return (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggleType(t)}
                    className={
                      on
                        ? 'text-text border-accent border-b'
                        : 'text-muted/70 hover:text-text border-b border-transparent line-through'
                    }
                  >
                    {t}
                  </button>
                )
              })}
            </div>

            <ul className="divide-border mt-4 divide-y">
              {places.length === 0 && <li className="text-muted py-3 text-sm">No places match.</li>}
              {places.map((t) => {
                const n = photoCounts.get(t.slug) ?? 0
                return (
                  <li key={t.slug}>
                    <button
                      type="button"
                      onClick={() => select(t.slug)}
                      className="hover:text-accent-strong flex w-full items-baseline justify-between gap-3 py-2.5 text-left transition-colors"
                    >
                      <span>{t.title}</span>
                      {n > 0 && (
                        <span className="meta shrink-0">
                          {n} {n === 1 ? 'photo' : 'photos'}
                        </span>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </aside>
    </div>
  )
}
