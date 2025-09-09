import React, { type PropsWithChildren } from 'react'
import Headline from './Headline'
import { FaCalendarAlt, FaCaretRight } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import ReactMarkDown from 'react-markdown'

type ExperienceProps = PropsWithChildren & {
  designation: string
  companyName: string
  dateFrom: string
  dateTo: string
  location: string
  summaryPoints: string[]
}
const Experience = ({ designation, companyName, dateFrom, dateTo, location, summaryPoints }: ExperienceProps) => {
  return (
    <div className="prose">
      <div className="text-[14px] uppercase">{designation}</div>
      <Headline fontSize={14}>{companyName}</Headline>
      <div className="flex flex-row gap-1">
        <div className="flex flex-row gap-1 items-center">
          <FaCalendarAlt className="text-gray-500" />
          <div className="text-[12px]">{`${dateFrom} - ${dateTo}`}</div>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <FaLocationDot className="text-gray-500" />
          <div className="text-[12px]">{location}</div>
        </div>
      </div>
      <div className="text-[11px]">
        {summaryPoints.map((point, index) => (
          <div className='flex h-full content-start'>
            <FaCaretRight className='pt-0.5 w-[20px] h-[20px] align-middle' />
            <div className="markdown w-[620px]">
              <ReactMarkDown>{point}</ReactMarkDown>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
