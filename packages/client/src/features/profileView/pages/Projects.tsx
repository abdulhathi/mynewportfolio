import Divider from '../../../components/Divider'
import Project from '../components/ProfileProject'
import SectionTitle from '../components/SectionTitle'
import projects from '../data/projects.json'

const Projects = () => {
  return (
    <div className="flex flex-col gap-2">
      <SectionTitle children="Projects" />
      <div className="flex flex-col">
        {projects.map(
          (proj, index) =>
            index < 5 && (
              <div key={index}>
                <Project
                  name={proj.name}
                  companyName={proj.companyName}
                  dateFrom={proj.dateFrom}
                  dateTo={proj.dateTo}
                  description={proj.description}
                ></Project>
                {index < projects.length && <Divider />}
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Projects
