import Divider from '../../../components/Divider'
import Project from '../components/Project'
import SectionTitle from '../components/SectionTitle'
import projects from '../data/projects.json'

interface ProjectSProps {
  projectsCount?: number
}
const Projects = ({ projectsCount = 5 }: ProjectSProps) => {
  return (
    <div className="flex flex-col gap-2">
      <SectionTitle children="Projects" />
      <div className="flex flex-col">
        {projects.map(
          (proj, index) =>
            index < projectsCount && (
              <div key={index}>
                <Project
                  name={proj.name}
                  companyName={proj.companyName}
                  dateFrom={proj.dateFrom}
                  dateTo={proj.dateTo}
                  description={proj.description}
                ></Project>
                {index < projectsCount - 1 && <Divider />}
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Projects
