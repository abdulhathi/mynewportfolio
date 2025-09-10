import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import Headline from './Headline'

export type CourseProps = {
  name: string
  link: string
  date: string
  issuer: string
}

const Course = ({ name, link, date, issuer }: CourseProps) => {
  return (
    <div className="prose leading-4">
      <a href={link} className='no-underline'>
        <Headline fontSize={12}>{name}</Headline>
      </a>
      <div className="flex flex-row gap-1 items-center  text-[12px]">
        <FaCalendarAlt className="text-gray-500 w-2.5" />
        <div>{date}</div>
      </div>
      {issuer && <div className="text-[12px]">{issuer}</div>}
    </div>
  )
}

export default Course
