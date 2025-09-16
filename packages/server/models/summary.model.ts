import mongoose, { Document, Schema } from 'mongoose'

export interface ISummary extends Document {
  summary: string
}

const summarySchema: Schema = new Schema<ISummary>({
  summary: { type: String, required: true },
})

const Summary = mongoose.model<ISummary>('Summary', summarySchema)

export default Summary
