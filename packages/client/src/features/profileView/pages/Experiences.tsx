import Divider from '../../../components/Divider'
import Experience from '../components/Experience'
import SectionTitle from '../components/SectionTitle'
import experiences from '../data/experience.json'

interface ExperiencesProps {
  start: number
  end: number
  showTitle?: boolean
}
const Experiences = ({ start, end, showTitle = true }: ExperiencesProps) => {
  return (
    <div className="flex flex-col gap-1">
      {showTitle && <SectionTitle children="Experience" />}
      <div className="flex flex-col">
        {experiences.map(
          ({ designation, companyName, dateFrom, dateTo, location, summaryPoints }, index) =>
            index >= start &&
            index <= end && (
              <div key={index}>
                <Experience
                  key={companyName}
                  designation={designation}
                  companyName={companyName}
                  dateFrom={dateFrom}
                  dateTo={dateTo}
                  location={location}
                  summaryPoints={summaryPoints}
                />
                {index < experiences.length - 1 && <Divider />}
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Experiences
