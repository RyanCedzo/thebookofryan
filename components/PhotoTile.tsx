import Link from 'next/link'
import Image from '@/components/Image'
import type { PhotoEntry } from '@/data/types/photo'

interface Props {
  photo: PhotoEntry
  priority?: boolean
  /** When provided, renders a button (e.g. to open a lightbox) instead of a link */
  onOpen?: () => void
}

const sizes = '(min-width: 1024px) 320px, (min-width: 640px) 45vw, 50vw'

export const photoGridClass =
  'grid grid-cols-2 gap-3 [grid-auto-flow:dense] auto-rows-[170px] sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-3 lg:auto-rows-[260px]'

export default function PhotoTile({ photo, priority, onOpen }: Props) {
  const className = `group relative block overflow-hidden bg-surface ${
    photo.isVertical ? 'row-span-2' : ''
  }`

  const inner = (
    <>
      <Image
        src={photo.imgSrc}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      <span className="bg-text/55 text-bg pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 px-3 py-2 text-left opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <span className="block font-serif text-sm leading-tight">{photo.title}</span>
        {photo.location && <span className="block text-xs opacity-80">{photo.location}</span>}
      </span>
    </>
  )

  if (onOpen) {
    return (
      <button type="button" onClick={onOpen} className={`${className} w-full`}>
        {inner}
      </button>
    )
  }

  return (
    <Link href={`/photos/${photo.id}`} className={className}>
      {inner}
    </Link>
  )
}
