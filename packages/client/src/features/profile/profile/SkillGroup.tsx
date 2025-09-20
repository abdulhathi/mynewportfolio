import Headline from '../../../components/Headline'

// type TechnicalSkill = {
//   skillName: string
//   experience?: Number
// }

type SkillGroupProps = {
  skillGroupTitle?: string
  // skills: TechnicalSkill[]
  skills: string[]
}

const SkillGroup = ({ skillGroupTitle, skills }: SkillGroupProps) => {
  return (
    <div>
      <Headline fontSize={12}>{skillGroupTitle}</Headline>
      {/* <p className="text-[12px]">{skills.map((skill) => skill.skillName).join(', ')}</p> */}
      <div className="text-[11px] pl-3">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </div>
    </div>
  )
}

export default SkillGroup
