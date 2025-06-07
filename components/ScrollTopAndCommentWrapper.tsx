'use client'

import dynamic from 'next/dynamic'

// Dynamically import your scroll component with SSR disabled
const ScrollTopAndComment = dynamic(() => import('./ScrollTopAndComment'), {
  ssr: false,
})

export default function ScrollTopAndCommentWrapper() {
  return <ScrollTopAndComment />
}