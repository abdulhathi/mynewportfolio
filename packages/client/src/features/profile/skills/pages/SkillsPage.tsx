import SkillCard from '../components/SkillCard'
import { useSkills } from '../hooks/useSkills'

const SkillsPage = () => {
  const { data: skills, isLoading, isError } = useSkills()
  if (isLoading) return <p>Loading Summaries</p>
  if (isError) return <p>Failed to load summaries</p>
  return (
    <div className='p-4'>
      {skills?.map((skill) => (
        <SkillCard skillName={skill} />
      ))}
    </div>
  )
}

export default SkillsPage
