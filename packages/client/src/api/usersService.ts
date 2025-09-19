import type { User } from '../types/user'
import http from './httpClient'

export const createUser = async (user: User): Promise<User> => {
  const { data } = await http.post('/users', user)
  return data
}
