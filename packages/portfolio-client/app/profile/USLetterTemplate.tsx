import React, { type PropsWithChildren } from 'react'

type USLetterTemplateProps = PropsWithChildren & {}
const USLetterTemplate = ({ children }: USLetterTemplateProps) => {
  return <div className="border-[1px] border-gray-400 shadow-2xl shadow-gray-400 w-[940px] h-[1216px] p-10">{children}</div>
}

export default USLetterTemplate
