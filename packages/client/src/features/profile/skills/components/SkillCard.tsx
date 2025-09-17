interface SkillCardProps {
  skillName: string
}
const SkillCard = ({ skillName }: SkillCardProps) => {
  return <>{`${skillName},`}</>
}

export default SkillCard
