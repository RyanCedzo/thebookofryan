// app/photos/page.tsx
import photosData from '@/data/photosData';
import Image from 'next/image';
import Link from 'next/link';
import { genPageMetadata } from 'app/seo';

export const metadata = genPageMetadata({ title: 'Photos' });

export default function PhotosPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-6xl">
          Photos
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          A collection of visual moments.
        </p>
      </div>

      <div className="py-12">
      <div className="grid auto-rows-[250px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photosData.map((photo) => (
            <Link
            key={photo.title}
            href={`/photos/${photo.title.toLowerCase().replace(/\s+/g, '-')}`}
            className={`group relative overflow-hidden rounded-lg shadow-lg ${
                photo.isVertical ? 'row-span-2' : ''
            }`}
            >
            <div className="relative h-full w-full">
                <Image
                src={photo.imgSrc}
                alt={photo.title}
                fill
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                style={{ objectPosition: 'top' }}
                />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                <h2 className="text-lg font-semibold">{photo.title}</h2>
            </div>
            </Link>
        ))}
        </div>
      </div>
    </div>
  );
}