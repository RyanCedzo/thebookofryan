import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="font-serif text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">{children}</h1>
  )
}
