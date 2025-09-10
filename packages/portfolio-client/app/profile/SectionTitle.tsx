import React, { type PropsWithChildren } from 'react'

type SectionTitleProps = PropsWithChildren & {}
const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div>
      <text className="text-[18px] font-medium uppercase">{children}</text>
      <div className='h-[3px] w-full bg-black'></div>
    </div>
  )
}

export default SectionTitle
