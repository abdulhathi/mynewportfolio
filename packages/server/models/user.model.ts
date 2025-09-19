import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  password: string
}

const UserSchema = new Schema<IUser>({
  name: { type: String, minLength: 5, required: true },
  email: { type: String, unique: true, minLength: 5, required: true },
  password: { type: String, minLength: 8, required: true },
})

const User = mongoose.model('User', UserSchema)

export default User
