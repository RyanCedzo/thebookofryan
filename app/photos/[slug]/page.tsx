import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from '@/components/Image'
import { photos, getPhoto, getLocation } from '@/data/photoUtils'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return photos.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const photo = getPhoto(slug)
  return {
    title: photo?.title ?? 'Photo not found',
    description: photo?.description,
  }
}

export default async function PhotoPage({ params }: Props) {
  const { slug } = await params
  const photo = getPhoto(slug)
  if (!photo) notFound()

  const location = getLocation(photo.locationId)
  const index = photos.findIndex((p) => p.id === photo.id)
  const newer = photos[index - 1]
  const older = photos[index + 1]

  return (
    <article>
      <div className="bg-surface relative h-[60vh] w-full sm:h-[75vh]">
        <Image
          src={photo.imgSrc}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-contain"
          priority
        />
      </div>

      <div className="mx-auto mt-8 max-w-[68ch]">
        <h1 className="font-serif text-3xl sm:text-4xl">{photo.title}</h1>
        <p className="meta mt-2">
          {[photo.date, photo.camera, photo.location].filter(Boolean).join(' · ')}
        </p>
        {photo.description && <p className="mt-5 text-lg">{photo.description}</p>}

        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {photo.locationId && (
            <Link
              href={`/travel?pin=${photo.locationId}`}
              className="text-accent-strong underline underline-offset-4"
            >
              View {location?.title ?? 'location'} on the map
            </Link>
          )}
          <Link href="/photos" className="text-muted hover:text-text underline underline-offset-4">
            All photos
          </Link>
        </p>

        <nav
          aria-label="More photos"
          className="border-border mt-10 flex justify-between border-t pt-6 text-sm"
        >
          {newer ? (
            <Link href={`/photos/${newer.id}`} className="text-muted hover:text-text">
              &larr; {newer.title}
            </Link>
          ) : (
            <span />
          )}
          {older && (
            <Link href={`/photos/${older.id}`} className="text-muted hover:text-text">
              {older.title} &rarr;
            </Link>
          )}
        </nav>
      </div>
    </article>
  )
}
