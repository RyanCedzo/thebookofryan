import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import PageHeader from '@/components/PageHeader'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <PageHeader title="Projects">
        <p>I&apos;ll have my projects here once I get around to it&hellip;</p>
      </PageHeader>
      {projectsData.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      )}
    </>
  )
}
