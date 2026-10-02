import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="text-muted hover:text-secondary mr-3 text-sm transition-colors"
    >
      #{text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
