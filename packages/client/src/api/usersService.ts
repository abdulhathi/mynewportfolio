import type { User } from '../types/user'
import http from './httpClient'

export const createUser = async (user: User): Promise<User> => {
  const { data } = await http.post('/users', user)
  return data
}

export const getAuthUser = async (token: string): Promise<User> => {
  const { data } = await http.get('/users/me', {
    headers: {
      'x-auth-token': token,
    },
  })
  return data
}
