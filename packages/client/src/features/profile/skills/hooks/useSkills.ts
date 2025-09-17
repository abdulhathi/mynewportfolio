import { useQuery } from '@tanstack/react-query'
import { getSkills } from '../../../../api/skillsService'

export const useSkills = () => useQuery<string[]>({ queryKey: ['skills'], queryFn: getSkills })
