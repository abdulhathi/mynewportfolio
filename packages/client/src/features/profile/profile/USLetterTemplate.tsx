import { type PropsWithChildren } from 'react'

// w-[940px] h-[1216px]
type USLetterTemplateProps = PropsWithChildren & {
  className?: string
}
const USLetterTemplate = ({ children, className = '' }: USLetterTemplateProps) => {
  return <div className={`w-[828px] h-[1026px] ${className}`}>{children}</div>
}

export default USLetterTemplate
