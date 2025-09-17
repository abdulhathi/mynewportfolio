import Headline from './Headline'

type TechnicalSkill = {
  skillName: string
  experience?: Number
}

type SkillGroupProps = {
  skillGroupTitle?: string
  skills: TechnicalSkill[]
}

const SkillGroup = ({ skillGroupTitle, skills }: SkillGroupProps) => {
  return (
    <div>
      <Headline fontSize={14}>{skillGroupTitle}</Headline>
      <p className="text-[12px]">{skills.map((skill) => skill.skillName).join(', ')}</p>
    </div>
  )
}

export default SkillGroup
