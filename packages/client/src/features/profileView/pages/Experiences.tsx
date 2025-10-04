import Divider from '../../../components/Divider'
import Experience from '../components/Experience'
import SectionTitle from '../components/SectionTitle'
import experiences from '../data/experience.json'

interface ExperiencesProps {
  start: number
  end: number
  showTitle?: boolean
  fontSize?: string
  designationFontSize?: string
  durationFontSize?: string
}
const Experiences = ({
  start,
  end,
  showTitle = true,
  fontSize,
  designationFontSize,
  durationFontSize,
}: ExperiencesProps) => {
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
                  fontSize={fontSize}
                  designationFontSize={designationFontSize}
                  durationFontSize={durationFontSize}
                />
                {index < end && <Divider />}
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Experiences
