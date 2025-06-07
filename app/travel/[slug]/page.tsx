import travelData from '@/data/travelData';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function TravelLocationPage({ params }: PageProps) {
  const location = travelData.find((item) => item.slug === params.slug);

  if (!location) return notFound();

  return (
    <div className="mx-auto max-w-3xl p-6 text-center">
      <h1 className="text-4xl font-bold mb-2">{location.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{location.date}</p>
      {location.imgSrc && (
        <img src={location.imgSrc} alt={location.title} className="mx-auto mb-4 rounded-lg" />
      )}
      <p className="text-lg text-gray-700 dark:text-gray-300">{location.description}</p>
    </div>
  );
}

// 👇 This lets Next.js statically generate pages for each travel entry
export function generateStaticParams() {
  return travelData.map((item) => ({
    slug: item.slug,
  }));
}