import type { User } from '../types/user'
import http from './httpClient'

export const login = async (user: User): Promise<string> => {
  const { data } = await http.post('/authenticate', user)
  return data
}
