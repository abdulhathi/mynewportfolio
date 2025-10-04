import { FaCalendarAlt } from 'react-icons/fa'
import Headline from '../../../components/Headline'
import { FaLocationDot } from 'react-icons/fa6'

export type EducationProps = {
  name: string
  issuer: string
  dateFrom: string
  dateTo?: string
  location: string
}

const Education = ({ name, issuer, dateFrom, dateTo, location }: EducationProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-1">
        {issuer && <div className="text-[12px]">{name} — </div>}
        <Headline fontSize='12'>{issuer}</Headline>
      </div>
      <div className="flex flex-row gap-4 italic">
        {(dateFrom || dateTo) && (
          <div className="flex flex-row gap-1 items-center text-[11px]">
            <FaCalendarAlt />
            {dateFrom && dateTo ? `${dateFrom} - ${dateTo}` : dateFrom ? dateFrom : dateTo}
          </div>
        )}
        {location && (
          <div className="flex flex-row gap-1 items-center text-[12px]">
            <FaLocationDot />
            <div>{location}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Education
