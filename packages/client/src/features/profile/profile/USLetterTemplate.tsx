import { type PropsWithChildren } from 'react'

// w-[940px] h-[1216px]
type USLetterTemplateProps = PropsWithChildren & {
  className?: string
  color?: string
}
const USLetterTemplate = ({ children, className = '', color = 'black' }: USLetterTemplateProps) => {
  return (
    <div style={{ color: color }} className={`w-[828px] h-[1026px] ${className}`}>
      {children}
    </div>
  )
}

export default USLetterTemplate
