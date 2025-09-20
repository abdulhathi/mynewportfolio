import { type PropsWithChildren } from 'react'

type HeadlineProps = PropsWithChildren & {
  className?: string
  fontSize?: number
}
// 69, 142, 247
const Headline = ({ children, className = 'text-[#458EF7]', fontSize = 14 }: HeadlineProps) => {
  return <div className={`text-[${fontSize}px] ${className} font-medium`}>{children}</div>
}

export default Headline
