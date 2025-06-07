'use client'

import dynamic from 'next/dynamic'

// Dynamically import TravelMapClient, no SSR
const TravelMapClient = dynamic(() => import('@/components/TravelMapClient'), {
  ssr: false,
})

export default function TravelPage() {
  return <TravelMapClient />
}