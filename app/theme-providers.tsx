'use client'

import { ThemeProvider } from 'next-themes'

// v1 is light-only. Keep the provider (pliny/kbar read from it) but force light.
export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}
