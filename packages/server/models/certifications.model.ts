import mongoose, { Document, Schema } from 'mongoose'

export interface ICertifications extends Document {
  name: string
  link: string
  date: string
  issuer: string
  credentialId: string
}

const CertificationsSchema = new Schema<ICertifications>({
  name: String,
  link: String,
  date: String,
  issuer: String,
  credentialId: String,
})

const Certifications = mongoose.model('Certifications', CertificationsSchema)

export default Certifications
