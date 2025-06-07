'use client'; // Mark this component as a Client Component

import { useParams } from 'next/navigation'; // Import from next/navigation
import photosData from '@/data/photosData';

const PhotoPage = () => {
  const { slug } = useParams(); // Access the dynamic slug
  
  const photo = photosData.find((p) => p.title.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12">
      <img
        src={photo.imgSrc}
        alt={photo.title}
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    <div className="mx-auto max-w-2xl text-center mt-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{photo.title}</h1>

        {photo.date && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {photo.date}
            </p>
        )}

        <div className="text-gray-600 dark:text-gray-400 mt-4 space-y-1 text-lg">
            {photo.camera && <p><strong>Camera:</strong> {photo.camera}</p>}
            {photo.location && <p><strong>Location:</strong> {photo.location}</p>}
        </div>

        <p className="mt-4 text-base text-gray-700 dark:text-gray-300">{photo.description}</p>
    </div>
    </div>
  );
};

export default PhotoPage;