import { type PropsWithChildren } from 'react'

type SectionTitleProps = PropsWithChildren & {}
const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div>
      <p className="text-[16px] font-medium uppercase">{children}</p>
      <div className="h-[3px] w-full bg-black"></div>
    </div>
  )
}

export default SectionTitle
