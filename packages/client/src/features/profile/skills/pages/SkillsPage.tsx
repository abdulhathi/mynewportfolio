import SkillCard from '../components/SkillCard'
import { useSkills } from '../hooks/useSkills'

const SkillsPage = () => {
  const { data: skills, isLoading, isError } = useSkills()
  if (isLoading) return <p>Loading Summaries</p>
  if (isError) return <p>Failed to load summaries</p>
  return (
    <>
      {skills?.map((skill) => (
        <SkillCard skillName={skill} />
      ))}
    </>
  )
}

export default SkillsPage
