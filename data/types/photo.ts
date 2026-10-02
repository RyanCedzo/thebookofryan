export interface Photo {
  title: string
  isVertical: boolean
  description?: string
  href?: string
  imgSrc: string
  tags?: string[]
  /** Free-text place, e.g. "Erie St, Bisbee, AZ" */
  location?: string
  /** Shared key with travelData.slug. Only set when a real matching pin exists. */
  locationId?: string
  camera?: string
  /** Extensible metadata for filters (not yet populated) */
  lens?: string
  trip?: string
  /** Free-text date, e.g. "December 7, 2024" */
  date?: string
}

/** Photo plus derived, normalized fields used by the gallery UI */
export interface PhotoEntry extends Photo {
  /** URL slug. Same algorithm as the original title-based routes, so existing URLs hold. */
  id: string
  /** YYYY-MM-DD, or '' if date is missing/unparseable */
  dateISO: string
  year: string
  /** Full month name, e.g. "December" */
  month: string
  /** Derived region from the location string, e.g. "Hawaii" */
  region: string
  alt: string
}
