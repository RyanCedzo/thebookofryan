import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import PageHeader from '@/components/PageHeader'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, instagram, github } = content

  return (
    <>
      <PageHeader title="About" />
      <div className="grid gap-10 md:grid-cols-[14rem_1fr] md:gap-14">
        <div className="flex flex-col items-start">
          {avatar && (
            <div className="bg-surface relative aspect-square w-40 overflow-hidden md:w-full">
              <Image
                src={avatar}
                alt={`Portrait of ${name}`}
                fill
                sizes="(min-width: 768px) 224px, 160px"
                className="object-cover"
              />
            </div>
          )}
          <h2 className="mt-4 font-serif text-xl">{name}</h2>
          <p className="meta">{[occupation, company].filter(Boolean).join(' · ')}</p>
          <div className="mt-4 flex gap-4">
            <SocialIcon kind="mail" href={`mailto:${email}`} size={5} />
            <SocialIcon kind="github" href={github} size={5} />
            <SocialIcon kind="instagram" href={instagram} size={5} />
          </div>
        </div>
        <div className="prose max-w-none">{children}</div>
      </div>
    </>
  )
}
