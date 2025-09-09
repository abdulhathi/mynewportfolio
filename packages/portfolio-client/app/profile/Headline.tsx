import React, { type PropsWithChildren } from 'react'

type HeadlineProps = PropsWithChildren & {
  className?: string
  fontSize?: number
}
const Headline = ({ children, className = 'text-blue-500', fontSize = 17 }: HeadlineProps) => {
  return <div className={`text-[${fontSize}px] ${className} font-medium`}>{children}</div>
}

export default Headline
