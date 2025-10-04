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
    <div className="prose flex flex-col gap-0">
      <div className="flex flex-row w-full justify-between h-full items-start">
        <div className="text-[11px] font-medium uppercase">{name}</div>
        <div className="flex flex-row gap-1 items-center italic text-[10px]">
          <FaCalendarAlt />
          <div>{`${dateFrom} - ${dateTo}`}</div>
        </div>
      </div>
      <div className="text-[11px] markdown">
        <Markdown>{description}</Markdown>
      </div>
    </div>
  )
}

export default Project
