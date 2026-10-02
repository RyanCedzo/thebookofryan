'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import PageHeader from '@/components/PageHeader'

// Leaflet needs the DOM, so load the map on the client only
const TravelMapClient = dynamic(() => import('@/components/TravelMapClient'), {
  ssr: false,
  loading: () => <div className="bg-surface h-[60vh] w-full" aria-hidden="true" />,
})

export default function TravelPage() {
  return (
    <>
      <PageHeader title="Map">
        <p>Places I&apos;ve been. Select a pin to see its photos.</p>
      </PageHeader>
      <Suspense fallback={null}>
        <TravelMapClient />
      </Suspense>
    </>
  )
}
