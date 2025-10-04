import Course from '../components/Course'
import SectionTitle from '../components/SectionTitle'
import certifications from '../data/certification.json'

const Certifications = () => (
  <div className="flex flex-col gap-2 w-full">
    <SectionTitle children="Certification" />
    <div className="grid grid-cols-1 gap-1">
      {certifications.map(({ name, link, date, issuer }) => (
        <Course key={name} name={name} link={link} date={date} issuer={issuer}></Course>
      ))}
    </div>
  </div>
)

export default Certifications
