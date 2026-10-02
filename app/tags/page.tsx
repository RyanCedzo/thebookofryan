import Link from '@/components/Link'
import PageHeader from '@/components/PageHeader'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>
      <PageHeader title="Tags" />
      <ul className="flex flex-wrap gap-x-6 gap-y-3">
        {tagKeys.length === 0 && <li className="text-muted">No tags found.</li>}
        {sortedTags.map((t) => (
          <li key={t}>
            <Link
              href={`/tags/${slug(t)}`}
              aria-label={`View posts tagged ${t}`}
              className="text-muted hover:text-text transition-colors"
            >
              #{t} <span className="meta">({tagCounts[t]})</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
