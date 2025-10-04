import { type PropsWithChildren } from 'react'
import Headline from '../../../components/Headline'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import ReactMarkdown from 'react-markdown'

type ExperienceProps = PropsWithChildren & {
  designation?: string
  companyName?: string
  dateFrom: string
  dateTo?: string
  location?: string
  summaryPoints?: string[]
  fontSize?: string
  designationFontSize?: string
  durationFontSize?: string
}
const Experience = ({
  designation,
  companyName,
  dateFrom,
  dateTo,
  location,
  summaryPoints = [],
  fontSize = '12',
  designationFontSize = '14',
  durationFontSize = '12',
}: ExperienceProps) => {
  return (
    <div className="flex flex-col gap-0.5">
      <div className='flex flex-col'>
        <div className="flex flex-row gap-1 items-center font-medium">
          {designation && <div className={`text-[${designationFontSize}px] font-normal'`}>{designation}</div>}
          <div className="text-[10px]">|</div>
          {companyName && (
            <Headline fontSize={designationFontSize} fontMedimum={false}>
              {companyName}
            </Headline>
          )}
        </div>
        <div className="flex flex-row gap-4 italic">
          {(dateFrom || dateTo) && (
            <div className="flex flex-row gap-1 items-center">
              <FaCalendarAlt className="text-gray-600 w-2.5" />
              <div className={`text-[${durationFontSize}px]`}>
                {dateFrom && dateTo ? `${dateFrom} - ${dateTo}` : dateFrom ? dateFrom : dateTo}
              </div>
            </div>
          )}
          {location && (
            <div className="flex flex-row gap-1 items-center">
              <FaLocationDot className="text-gray-600 w-2.5" />
              <div className={`text-[${durationFontSize}px]`}>{location}</div>
            </div>
          )}
        </div>
      </div>
      <ul className={`text-[${fontSize}px] pl-4 list-disc list-outside`}>
        {summaryPoints.map((point, index) => (
          <li key={index}>
            <ReactMarkdown>{point}</ReactMarkdown>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience
