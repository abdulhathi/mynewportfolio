import type { IUser } from '../models/user.model'
import { UserRepository } from '../repositories/user.repository'

export const UserService = {
  async postUser(user: IUser) {
    return await UserRepository.postUser(user)
  },

  async findUser(email: string) {
    return await UserRepository.findUser(email)
  },

  async findUserById(id: string) {
    return await UserRepository.findUserById(id)
  }
}
