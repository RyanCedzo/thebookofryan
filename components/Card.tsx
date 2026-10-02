import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <article className="border-border bg-surface/50 overflow-hidden border">
    {imgSrc && (
      <div className="relative aspect-[3/2] w-full">
        <Image
          alt={title}
          src={imgSrc}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    )}
    <div className="p-5">
      <h2 className="font-serif text-xl">
        {href ? (
          <Link href={href} className="hover:text-accent-strong transition-colors">
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className="text-muted mt-2">{description}</p>
    </div>
  </article>
)

export default Card
