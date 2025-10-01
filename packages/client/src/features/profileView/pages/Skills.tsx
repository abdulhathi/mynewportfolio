import SectionTitle from '../components/SectionTitle'
import SkillGroup from '../components/SkillGroup'
import skills from '../data/skills.json'

const Skills = () => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <SectionTitle children="Skills" />
      <div className="flex flex-row justify-between gap-1">
        <div className="flex flex-col w-[50%]">
          {skills.map(
            ({ skillGroupTitle, skills }, index) =>
              index < 5 && (
                <div key={index}>
                  <SkillGroup skillGroupTitle={skillGroupTitle} skills={skills} />
                </div>
              )
          )}
        </div>
        <div className="flex flex-col w-[50%]">
          {skills.map(
            ({ skillGroupTitle, skills }, index) =>
              index >= 5 && (
                <div key={index}>
                  <SkillGroup skillGroupTitle={skillGroupTitle} skills={skills} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  )
}

export default Skills
