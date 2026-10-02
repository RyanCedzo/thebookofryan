import Link from '@/components/Link'
import PhotoTile, { photoGridClass } from '@/components/PhotoTile'
import siteMetadata from '@/data/siteMetadata'
import { photos } from '@/data/photoUtils'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_POSTS = 3
const MAX_PHOTOS = 6

export default function Home({ posts }) {
  const recentPhotos = photos.slice(0, MAX_PHOTOS)

  return (
    <div className="space-y-20 pt-2">
      <section aria-labelledby="recent-photos">
        <div className="mb-6 flex items-baseline justify-between">
          <h1 id="recent-photos" className="font-serif text-2xl sm:text-3xl">
            Recent photos
          </h1>
          <Link href="/photos" className="text-muted hover:text-text text-sm transition-colors">
            All photos &rarr;
          </Link>
        </div>
        <div className={photoGridClass}>
          {recentPhotos.map((photo, i) => (
            <PhotoTile key={photo.id} photo={photo} priority={i < 3} />
          ))}
        </div>
      </section>

      <section aria-labelledby="recent-posts">
        <div className="mb-2 flex items-baseline justify-between">
          <h2 id="recent-posts" className="font-serif text-2xl sm:text-3xl">
            Recent writing
          </h2>
          <Link href="/blog" className="text-muted hover:text-text text-sm transition-colors">
            All posts &rarr;
          </Link>
        </div>
        <ul className="divide-border divide-y">
          {!posts.length && <li className="text-muted py-6">No posts yet.</li>}
          {posts.slice(0, MAX_POSTS).map((post) => {
            const { slug, date, title, summary } = post
            return (
              <li key={slug} className="py-6">
                <article className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-8">
                  <time dateTime={date} className="meta pt-1.5">
                    {formatDate(date, siteMetadata.locale)}
                  </time>
                  <div>
                    <h3 className="font-serif text-xl leading-snug">
                      <Link
                        href={`/blog/${slug}`}
                        className="hover:text-accent-strong transition-colors"
                      >
                        {title}
                      </Link>
                    </h3>
                    {summary && <p className="text-muted mt-1.5">{summary}</p>}
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </section>

      <p className="text-muted text-sm">
        Looking for somewhere in particular?{' '}
        <Link
          href="/travel"
          className="text-accent-strong underline decoration-border underline-offset-4 hover:decoration-accent"
        >
          See the map
        </Link>{' '}
        of places I&apos;ve been.
      </p>
    </div>
  )
}
