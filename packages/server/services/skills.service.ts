import type { ISkills } from '../models/skills.model'
import { SkillsRepository } from '../repositories/skills.repository'

export const SkillsService = {
  async getSkills() {
    const skillsWithGroupName: ISkills[] = await SkillsRepository.getSkills()
    // return skillsWithGroupName.flatMap((group) => group.skills.map((skill) => skill.skillName))
    return skillsWithGroupName.reduce<string[]>((acc, group) => {
      const skills = group.skills.map((skill) => skill.skillName)
      return acc.concat(skills)
    }, [])
  },

  getSkillsWithGroup() {
    return SkillsRepository.getSkills()
  },
}
