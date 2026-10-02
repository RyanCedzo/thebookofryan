import { ReactNode } from 'react'

interface Props {
  title: string
  children?: ReactNode
}

export default function PageHeader({ title, children }: Props) {
  return (
    <div className="border-border mb-8 border-b pb-6 sm:mb-10">
      <h1 className="font-serif text-3xl sm:text-4xl">{title}</h1>
      {children && <div className="text-muted mt-2 max-w-prose">{children}</div>}
    </div>
  )
}
