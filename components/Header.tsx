import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import MobileNav from './MobileNav'
import NavLinks from './NavLinks'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass = 'flex w-full items-center justify-between py-8 sm:py-10 bg-bg'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link
        href="/"
        aria-label={siteMetadata.headerTitle}
        className="font-serif text-xl tracking-tight text-text sm:text-2xl"
      >
        {siteMetadata.headerTitle}
      </Link>
      <div className="flex items-center gap-x-6">
        <NavLinks />
        <SearchButton />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
