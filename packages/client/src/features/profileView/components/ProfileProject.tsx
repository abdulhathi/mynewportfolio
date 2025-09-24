import { type PropsWithChildren } from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import Markdown from 'react-markdown'

type ProjectProps = PropsWithChildren & {
  name: string
  companyName?: string
  dateFrom: string
  dateTo: string
  location?: string
  description: string
}
const Project = ({ name, dateFrom, dateTo, description }: ProjectProps) => {
  return (
    <div className="prose flex flex-col gap-0 leading-4">
      <div className="flex flex-row gap-1 justify-between items-center">
        <div className="text-[12px] uppercase">{name}</div>
        <div className="flex flex-row gap-1 items-center">
          <FaCalendarAlt className="text-gray-700 w-2.5" />
          <div className="text-[11px]">{`${dateFrom} - ${dateTo}`}</div>
        </div>
      </div>
      <div className="text-[11px] leading-4 markdown">
        <Markdown>{description}</Markdown>
      </div>
    </div>
  )
}

export default Project
