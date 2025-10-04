import Headline from '../../../components/Headline'

// type TechnicalSkill = {
//   skillName: string
//   experience?: Number
// }

type SkillGroupProps = {
  skillGroupTitle?: string
  // skills: TechnicalSkill[]
  skills: string[]
  fontSize?: string
}

const SkillGroup = ({ skillGroupTitle, skills, fontSize = '12' }: SkillGroupProps) => {
  return (
    <div>
      <Headline fontSize={fontSize}>{skillGroupTitle}</Headline>
      {/* <p className="text-[12px]">{skills.map((skill) => skill.skillName).join(', ')}</p> */}
      <div className={`text-[${fontSize}px] pl-3`}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </div>
    </div>
  )
}

export default SkillGroup
