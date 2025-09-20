import { type PropsWithChildren } from 'react'
import Headline from '../../../components/Headline'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import ReactMarkDown from 'react-markdown'
import { GoDotFill } from 'react-icons/go'

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
    <div className="leading-4.5">
      {designation && <div className="text-[14px] font-normal">{designation}</div>}
      {companyName && <Headline fontSize={14}>{companyName}</Headline>}
      {certifiedOrganization && <div className="text-[14px] uppercase">{certifiedOrganization}</div>}
      <div className="flex flex-row gap-4">
        {(dateFrom || dateTo) && (
          <div className="flex flex-row gap-1 items-center">
            <FaCalendarAlt className="text-gray-600 w-2.5" />
            <div className="text-[12px]">
              {dateFrom && dateTo ? `${dateFrom} - ${dateTo}` : dateFrom ? dateFrom : dateTo}
            </div>
          </div>
        )}
        {location && (
          <div className="flex flex-row gap-1 items-center">
            <FaLocationDot className="text-gray-600 w-2.5" />
            <div className="text-[12px]">{location}</div>
          </div>
        )}
      </div>
      <div className="mt-0 prose text-[11px] leading-[14px]">
        {summaryPoints.map((point, index) => (
          <div className="flex h-full gap-1.5" key={index}>
            <GoDotFill className="pt-1" />
            <div className="markdown w-[750px]">
              <ReactMarkDown>{point}</ReactMarkDown>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
