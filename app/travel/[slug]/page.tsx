import travelData from '@/data/travelData'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: Promise<Params>
}

type Params = {
  slug: string
}

export default async function TravelLocationPage({ params }: Props) {
  const { slug } = await params;
  const location = travelData.find((item) => item.slug === slug);

  if (!location) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-3xl p-6 text-center">
      <h1 className="text-4xl font-bold mb-2">{location.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{location.date}</p>
      {location.imgSrc && (
        <img src={location.imgSrc} alt={location.title} className="mx-auto mb-4 rounded-lg" />
      )}
      <p className="text-lg text-gray-700 dark:text-gray-300">{location.description}</p>
    </div>
  )
}

// Tell Next.js which slugs to statically generate at build time
export async function generateStaticParams(): Promise<Params[]> {
  return travelData.map((item) => ({
    slug: item.slug,
  }))
}

// Optional: metadata for the page, typed correctly
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = travelData.find((item) => item.slug === slug);
  return {
    title: location?.title ?? 'Location Not Found',
  }
}