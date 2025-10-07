import SectionTitle from '../components/SectionTitle'
import SkillGroup from '../components/SkillGroup'
import skills from '../data/skills.json'

interface SkillsProps {
  doubleSided?: boolean
  fontSize?: string
  start?: number
  end?: number
}
const Skills = ({ doubleSided = false, fontSize, start = 0, end = 100 }: SkillsProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <SectionTitle children="Skills" />
      {doubleSided ? (
        <div className="flex flex-row justify-between gap-1">
          <div className="flex flex-col w-[50%]">
            {skills.map(
              ({ skillGroupTitle, skills }, index) =>
                index < 5 && (
                  <div key={index}>
                    <SkillGroup skillGroupTitle={skillGroupTitle} skills={skills} fontSize={fontSize} />
                  </div>
                )
            )}
          </div>
          <div className="flex flex-col w-[50%]">
            {skills.map(
              ({ skillGroupTitle, skills }, index) =>
                index >= 5 && (
                  <div key={index}>
                    <SkillGroup skillGroupTitle={skillGroupTitle} skills={skills} fontSize={fontSize} />
                  </div>
                )
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          {skills.map(
            ({ skillGroupTitle, skills }, index) =>
              index >= start &&
              index <= end && (
                <SkillGroup key={index} skillGroupTitle={skillGroupTitle} skills={skills} fontSize={fontSize} />
              )
          )}
        </div>
      )}
    </div>
  )
}

export default Skills
