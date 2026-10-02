import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  const links = [
    { label: 'Instagram', href: siteMetadata.instagram },
    { label: 'GitHub', href: siteMetadata.github },
    { label: 'Medium', href: siteMetadata.medium },
    { label: 'Email', href: siteMetadata.email ? `mailto:${siteMetadata.email}` : undefined },
  ].filter((l) => l.href)

  return (
    <footer className="border-border mt-20 border-t py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="meta">
          &copy; {new Date().getFullYear()} {siteMetadata.author}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <Link href={l.href as string} className="text-muted hover:text-text transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
