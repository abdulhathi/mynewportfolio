import Education from '../components/Education'
import SectionTitle from '../components/SectionTitle'

const Educations = () => (
  <div className="flex flex-col gap-2 w-full">
    <SectionTitle children="Education" />
    <Education
      name="B-Tech, Information Technology"
      dateFrom="2001"
      dateTo="2005"
      issuer="Anna University"
      location="Chennai, India"
    ></Education>
  </div>
)

export default Educations
