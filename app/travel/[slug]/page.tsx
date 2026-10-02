import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from '@/components/Image'
import travelData from '@/data/travelData'
import { getPhotosForLocation } from '@/data/photoUtils'

type Props = {
  params: Promise<Params>
}

type Params = {
  slug: string
}

export default async function TravelLocationPage({ params }: Props) {
  const { slug } = await params
  const location = travelData.find((item) => item.slug === slug)

  if (!location) {
    notFound()
  }

  const photos = getPhotosForLocation(location.slug)
  const dates = location.isCurrent
    ? []
    : location.date
        .split('\n')
        .map((s) => s.replace(/,$/, '').trim())
        .filter(Boolean)

  return (
    <article className="mx-auto max-w-[68ch]">
      <p className="meta">{[location.type, ...dates].join(' · ')}</p>
      <h1 className="mt-2 font-serif text-3xl sm:text-4xl">{location.title}</h1>

      {location.imgSrc && (
        <div className="bg-surface relative mt-6 aspect-[3/2] w-full overflow-hidden">
          <Image
            src={location.imgSrc}
            alt={location.title}
            fill
            sizes="(min-width: 768px) 68ch, 100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      <p className="mt-6 text-lg">{location.description}</p>

      <p className="mt-6 text-sm">
        <Link
          href={`/travel?pin=${location.slug}`}
          className="text-accent-strong underline underline-offset-4"
        >
          View on the map
        </Link>
      </p>

      {photos.length > 0 && (
        <section className="border-border mt-10 border-t pt-6" aria-labelledby="photos-here">
          <div className="flex items-baseline justify-between">
            <h2 id="photos-here" className="font-serif text-xl">
              Photos from here
            </h2>
            <Link
              href={`/photos?place=${location.slug}`}
              className="text-muted hover:text-text text-sm"
            >
              Open in Photos &rarr;
            </Link>
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {photos.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/photos/${p.id}`}
                  className="bg-surface relative block aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={p.imgSrc}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 640px) 200px, 50vw"
                    className="object-cover"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}

// Tell Next.js which slugs to statically generate at build time
export async function generateStaticParams(): Promise<Params[]> {
  return travelData.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const location = travelData.find((item) => item.slug === slug)
  return {
    title: location?.title ?? 'Location Not Found',
    description: location?.description,
  }
}
