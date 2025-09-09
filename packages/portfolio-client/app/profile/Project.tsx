import React, { type PropsWithChildren } from 'react'
import Headline from './Headline'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import Markdown from 'react-markdown'

type ProjectProps = PropsWithChildren & {
  name: string
  companyName?: string
  dateFrom: string
  dateTo: string
  location?: string
  description: string
}
const Project = ({ name, companyName, dateFrom, dateTo, location, description }: ProjectProps) => {
  return (
    <div className="prose">
      <div className="text-[14px] uppercase">{name}</div>
      {/* <Headline fontSize={14}>{companyName}</Headline> */}
      <div className="flex flex-row gap-1">
        <div className="flex flex-row gap-1 items-center">
          <FaCalendarAlt className="text-gray-500" />
          <div className="text-[12px]">{`${dateFrom} - ${dateTo}`}</div>
        </div>
        {/* <div className="flex flex-row gap-1 items-center">
          <FaLocationDot className="text-gray-400" />
          <div className="text-[12px]">{location}</div>
        </div> */}
      </div>
      <div className="text-[11px] pl-2 m-0 leading-4 markdown">
        <Markdown>{description}</Markdown>
      </div>
    </div>
  )
}

export default Project
