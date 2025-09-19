import { useMutation } from '@tanstack/react-query'
import { createUser } from '../../../api/usersService'
import type { User } from '../../../types/user'

export const useUsers = () =>
  useMutation({
    mutationFn: (user: User) => createUser(user),
  })
