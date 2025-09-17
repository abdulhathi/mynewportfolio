import mongoose, { Schema, Document } from 'mongoose'

export interface ISkill extends Document {
  skillName: string
  experience: Number
}

const SkillSchema = new Schema<ISkill>({
  skillName: String,
  experience: Number,
})

export interface ISkills extends Document {
  skillGroupTitle: string
  skills: ISkill[]
}

const SkillsSchema: Schema = new Schema<ISkills>({
  skillGroupTitle: { type: String, required: true },
  skills: [SkillSchema],
})

const Skills = mongoose.model<ISkills>('Skills', SkillsSchema)

export default Skills
