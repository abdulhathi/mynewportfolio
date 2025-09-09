import React, { type PropsWithChildren } from 'react'
import Headline from './Headline'
import { FaCalendarAlt, FaCaretRight } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import ReactMarkDown from 'react-markdown'

type ExperienceProps = PropsWithChildren & {
  designation?: string
  companyName?: string
  certifiedOrganization?: string
  dateFrom: string
  dateTo?: string
  location?: string
  summaryPoints?: string[]
}
const Experience = ({
  designation,
  companyName,
  certifiedOrganization,
  dateFrom,
  dateTo,
  location,
  summaryPoints = [],
}: ExperienceProps) => {
  return (
    <div className="leading-5">
      {designation && <div className="text-[14px] uppercase">{designation}</div>}
      {companyName && <Headline fontSize={14}>{companyName}</Headline>}
      {certifiedOrganization && <div className="text-[14px] uppercase">{certifiedOrganization}</div>}
      <div className="flex flex-row gap-1">
        {(dateFrom || dateTo) && (
          <div className="flex flex-row gap-1 items-center">
            <FaCalendarAlt className="text-gray-500 w-2.5" />
            <div className="text-[12px]">
              {dateFrom && dateTo ? `${dateFrom} - ${dateTo}` : dateFrom ? dateFrom : dateTo}
            </div>
          </div>
        )}
        {location && (
          <div className="flex flex-row gap-1 items-center">
            <FaLocationDot className="text-gray-500 w-2.5" />
            <div className="text-[12px]">{location}</div>
          </div>
        )}
      </div>
      <div className="mt-1 prose text-[11px] leading-[14px]">
        {summaryPoints.map((point, index) => (
          <div className="flex h-full" key={index}>
            <FaCaretRight className="pt-0.5 w-[20px] h-[15px]" />
            <div className="markdown w-[700px]">
              <ReactMarkDown>{point}</ReactMarkDown>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
