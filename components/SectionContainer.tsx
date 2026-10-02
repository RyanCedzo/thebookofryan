import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <section className="mx-auto w-full max-w-5xl px-5 sm:px-8">{children}</section>
}
