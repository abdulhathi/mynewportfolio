import Experience from '../components/Experience'
import SectionTitle from '../components/SectionTitle'

const Education = () => (
  <div className="flex flex-col gap-2 w-full">
    <SectionTitle children="Education" />
    <Experience
      designation="B-Tech, Information Technology"
      dateFrom="2001"
      dateTo="2005"
      companyName="Anna University"
    />
  </div>
)

export default Education
