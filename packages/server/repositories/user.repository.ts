import type { IUser } from '../models/user.model'
import User from '../models/user.model'

export const UserRepository = {
  async postUser(user: IUser) {
    return await User.create(user)
  },

  async findUser(email: string) {
    return await User.findOne({ email })
  },

  async findUserById(id: string) {
    return await User.findById(id).select('-_id -password')
  },
}
