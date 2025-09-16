import React from 'react'
import type { CourseProps } from './Course'
import Course from './Course'

type CoursesProps = {
  courses: CourseProps[]
}

const Courses = ({ courses }: CoursesProps) => {
  return (
    <div className="grid grid-cols-2 gap-1">
      {courses.map(({ name, link, date, issuer }, index) => (
        <Course key={name} name={name} link={link} date={date} issuer={issuer}></Course>
      ))}
    </div>
  )
}

export default Courses
