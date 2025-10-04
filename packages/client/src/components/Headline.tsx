import { type PropsWithChildren } from 'react'

type HeadlineProps = PropsWithChildren & {
  className?: string
  fontSize?: string
  fontMedimum?: boolean
}
// 69, 142, 247
const Headline = ({ children, className = 'text-[#458EF7]', fontSize = '14', fontMedimum = true }: HeadlineProps) => {
  return <div className={`text-[${fontSize}px] ${className} ${fontMedimum && 'font-medium'}`}>{children}</div>
}

export default Headline
