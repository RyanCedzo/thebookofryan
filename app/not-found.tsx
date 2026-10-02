import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="max-w-prose py-12">
      <p className="meta">404</p>
      <h1 className="mt-2 font-serif text-3xl sm:text-4xl">This page wandered off.</h1>
      <p className="text-muted mt-3">
        We couldn&apos;t find what you were looking for. Try the{' '}
        <Link href="/" className="text-accent-strong underline underline-offset-4">
          home page
        </Link>
        , the{' '}
        <Link href="/blog" className="text-accent-strong underline underline-offset-4">
          blog
        </Link>
        , or the{' '}
        <Link href="/photos" className="text-accent-strong underline underline-offset-4">
          photos
        </Link>
        .
      </p>
    </div>
  )
}
