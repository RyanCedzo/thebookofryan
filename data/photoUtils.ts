import photosData from '@/data/photosData'
import travelData from '@/data/travelData'
import type { Photo, PhotoEntry } from '@/data/types/photo'

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

const STATES: Record<string, string> = {
  AZ: 'Arizona',
  CA: 'California',
  HI: 'Hawaii',
  NM: 'New Mexico',
  OH: 'Ohio',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  SD: 'South Dakota',
  UT: 'Utah',
  WA: 'Washington',
}

/** Same algorithm the original /photos/[slug] route used, so URLs do not change. */
export const photoSlug = (title: string) => title.toLowerCase().replace(/\s+/g, '-')

function parseDate(input?: string) {
  const m = input?.match(/([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})/)
  if (!m) return { iso: '', year: '', month: '' }
  const monthIdx = MONTHS.findIndex((x) => x.toLowerCase() === m[1].toLowerCase())
  if (monthIdx < 0) return { iso: '', year: m[3], month: '' }
  const mm = String(monthIdx + 1).padStart(2, '0')
  const dd = String(Number(m[2])).padStart(2, '0')
  return { iso: `${m[3]}-${mm}-${dd}`, year: m[3], month: MONTHS[monthIdx] }
}

function regionOf(location?: string) {
  if (!location) return ''
  const parts = location.split(',')
  const last = parts[parts.length - 1].trim()
  return STATES[last] ?? last
}

function enrich(photo: Photo): PhotoEntry {
  const d = parseDate(photo.date)
  return {
    ...photo,
    id: photoSlug(photo.title),
    dateISO: d.iso,
    year: d.year,
    month: d.month,
    region: regionOf(photo.location),
    alt: photo.location ? `${photo.title}, ${photo.location}` : photo.title,
  }
}

/** All photos, newest first. */
export const photos: PhotoEntry[] = photosData
  .map(enrich)
  .sort((a, b) => (a.dateISO < b.dateISO ? 1 : a.dateISO > b.dateISO ? -1 : 0))

export const getPhoto = (id: string) => photos.find((p) => p.id === id)

export const getPhotosForLocation = (locationId: string) =>
  photos.filter((p) => p.locationId === locationId)

export const getLocation = (locationId?: string) =>
  locationId ? travelData.find((t) => t.slug === locationId) : undefined