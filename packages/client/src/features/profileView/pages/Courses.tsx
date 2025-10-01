import Course from '../components/Course'
import courses from '../data/courses.json'

const Courses = () => {
  return (
    <div className="grid grid-cols-2 gap-1">
      {courses.map(({ name, link, date, issuer }) => (
        <Course key={name} name={name} link={link} date={date} issuer={issuer}></Course>
      ))}
    </div>
  )
}

export default Courses
