import { FaCalendarAlt } from 'react-icons/fa'
import Headline from '../../../components/Headline'

export type CourseProps = {
  name: string
  link: string
  date: string
  issuer: string
}

const Course = ({ name, link, date, issuer }: CourseProps) => {
  return (
    <div className="flex justify-between">
      <div className='flex gap-1'>
        {issuer && <div className="text-[12px]">{issuer} - </div>}
        <a href={link} className="no-underline">
          <Headline fontSize='12'>{name}</Headline>
        </a>
      </div>
      <div className="flex flex-row gap-1 items-center text-[12px] italic">
        <FaCalendarAlt />
        <div>{date}</div>
      </div>
    </div>
  )
}

export default Course
