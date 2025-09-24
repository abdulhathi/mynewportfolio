import { useMutation } from '@tanstack/react-query'
import { login } from '../../../api/authService'
import type { User } from '../../../types/user'

export const useLogin = () =>
  useMutation({
    mutationFn: (user: User) => login(user),
  })
