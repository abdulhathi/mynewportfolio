import { type PropsWithChildren } from 'react'
import Headline from '../../../components/Headline'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import ReactMarkdown from 'react-markdown'

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
    <div>
      <div className='flex flex-row gap-1'>
        {designation && <div className="text-[14px] font-normal">{designation}</div>}
        <div>|</div>
        {companyName && <Headline fontSize={14}>{companyName}</Headline>}
      </div>
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
      <div className="text-[12px] pl-4 list-outside">
        {summaryPoints.map((point, index) => (
          <li key={index}><ReactMarkdown>{point}</ReactMarkdown> </li>
        ))}
      </div>
    </div>
  )
}

export default Experience
