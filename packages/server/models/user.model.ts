import mongoose, { Document, Model, Schema } from 'mongoose'
import config from 'config'
import jwt from 'jsonwebtoken'

export interface IUser extends Document {
  name: string
  email: string
  password: string
  admin: boolean
  genAuthToken(): string
}

const UserSchema = new Schema<IUser>({
  name: { type: String, minLength: 5, required: true },
  email: { type: String, unique: true, minLength: 5, required: true },
  password: { type: String, minLength: 8, required: true },
  admin: { type: Boolean, default: false },
})

// * Generating the auth token from user schema as a method (genAuthtoken).
UserSchema.methods.genAuthToken = function (): string {
  const pkey = config.get<string>('jwt.secret')
  const token = jwt.sign({ _id: this._id, admin: this.admin }, pkey)
  return token
}

const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema)

export default User
