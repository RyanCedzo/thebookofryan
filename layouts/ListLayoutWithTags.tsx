'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import PageHeader from '@/components/PageHeader'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+$/, '') // Remove any trailing /page
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  const linkClass = 'text-accent-strong hover:text-text transition-colors'
  const disabledClass = 'text-muted/60'

  return (
    <nav aria-label="Pagination" className="border-border mt-6 flex justify-between border-t pt-6 text-sm">
      {prevPage ? (
        <Link
          href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
          rel="prev"
          className={linkClass}
        >
          &larr; Newer
        </Link>
      ) : (
        <span className={disabledClass}>&larr; Newer</span>
      )}
      <span className="meta">
        {currentPage} of {totalPages}
      </span>
      {nextPage ? (
        <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next" className={linkClass}>
          Older &rarr;
        </Link>
      ) : (
        <span className={disabledClass}>Older &rarr;</span>
      )}
    </nav>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a])
  const activeTag = pathname.includes('/tags/') ? decodeURI(pathname.split('/tags/')[1]).split('/')[0] : ''
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <PageHeader title={title} />

      {sortedTags.length > 0 && (
        <nav aria-label="Filter posts by tag" className="mb-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link
            href="/blog"
            aria-current={!activeTag ? 'page' : undefined}
            className={!activeTag ? 'text-text border-accent border-b' : 'text-muted hover:text-text'}
          >
            All
          </Link>
          {sortedTags.map((t) => {
            const active = activeTag === slug(t)
            return (
              <Link
                key={t}
                href={`/tags/${slug(t)}`}
                aria-current={active ? 'page' : undefined}
                aria-label={`View posts tagged ${t}`}
                className={
                  active ? 'text-text border-accent border-b' : 'text-muted hover:text-text transition-colors'
                }
              >
                {t} <span className="meta">{tagCounts[t]}</span>
              </Link>
            )
          })}
        </nav>
      )}

      <ul className="divide-border divide-y">
        {!displayPosts.length && <li className="text-muted py-6">No posts found.</li>}
        {displayPosts.map((post) => {
          const { path, date, title, summary, tags } = post
          return (
            <li key={path} className="py-7 first:pt-0">
              <article className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-8">
                <time dateTime={date} suppressHydrationWarning className="meta pt-1.5">
                  {formatDate(date, siteMetadata.locale)}
                </time>
                <div>
                  <h2 className="font-serif text-2xl leading-snug">
                    <Link href={`/${path}`} className="hover:text-accent-strong transition-colors">
                      {title}
                    </Link>
                  </h2>
                  {summary && <p className="text-muted mt-2">{summary}</p>}
                  {tags && tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </li>
          )
        })}
      </ul>

      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
