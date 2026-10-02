import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndCommentWrapper from '@/components/ScrollTopAndCommentWrapper'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]
  const authorNames = authorDetails.map((a) => a.name).filter(Boolean)

  return (
    <>
      <ScrollTopAndCommentWrapper />
      <article className="mx-auto max-w-[68ch]">
        <header className="border-border border-b pb-8">
          <p className="meta">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </time>
            {authorNames.length > 0 && <> &middot; {authorNames.join(', ')}</>}
          </p>
          <div className="mt-3">
            <PageTitle>{title}</PageTitle>
          </div>
          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          )}
        </header>

        <div className="prose max-w-none pt-8 pb-10">{children}</div>

        <div className="border-border text-muted border-t pt-5 text-sm">
          <Link href={editUrl(filePath)} className="hover:text-text transition-colors">
            View on GitHub
          </Link>
        </div>

        {siteMetadata.comments && (
          <div className="pt-8 pb-4" id="comment">
            <Comments slug={slug} />
          </div>
        )}

        {(next || prev) && (
          <nav
            aria-label="More posts"
            className="border-border mt-8 grid gap-6 border-t pt-8 sm:grid-cols-2"
          >
            {prev && prev.path ? (
              <div>
                <p className="meta">Previous</p>
                <Link
                  href={`/${prev.path}`}
                  className="hover:text-accent-strong font-serif text-lg transition-colors"
                >
                  {prev.title}
                </Link>
              </div>
            ) : (
              <span />
            )}
            {next && next.path && (
              <div className="sm:text-right">
                <p className="meta">Next</p>
                <Link
                  href={`/${next.path}`}
                  className="hover:text-accent-strong font-serif text-lg transition-colors"
                >
                  {next.title}
                </Link>
              </div>
            )}
          </nav>
        )}

        <div className="pt-8">
          <Link
            href={`/${basePath}`}
            className="text-muted hover:text-text text-sm transition-colors"
            aria-label="Back to the blog"
          >
            &larr; All posts
          </Link>
        </div>
      </article>
    </>
  )
}
