import Skills from '../models/skills.model'

export const SkillsRepository = {
  async getSkills() {
    return await Skills.find()
  },
}