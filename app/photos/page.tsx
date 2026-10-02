import { Suspense } from 'react'
import { genPageMetadata } from 'app/seo'
import PhotosPageClient from './PhotosPageClient'

export const metadata = genPageMetadata({ title: 'Photos' })

export default function PhotosPage() {
  return (
    <Suspense fallback={null}>
      <PhotosPageClient />
    </Suspense>
  )
}
