import mongoose, { Schema, Document } from 'mongoose'

export interface ICourses extends Document {
  name: string
  link: string
  date: string
  issuer: string
  credentialId: string
}

const CoursesSchema = new Schema<ICourses>({
  name: String,
  link: String,
  date: String,
  issuer: String,
  credentialId: String,
})

const Courses = mongoose.model('Courses', CoursesSchema)

export default Courses
