import type { IUser } from '../models/user.model'
import User from '../models/user.model'

export const UserRepository = {
  async postUser(user: Partial<IUser>) {
    return await User.create(user)
  },

  async findUser(email: string) {
    return await User.findOne({email})
  }
  
}
