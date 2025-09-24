import { useQuery } from '@tanstack/react-query'
import type { User } from '../../../types/user'
import { getAuthUser } from '../../../api/usersService'

const useAuthUser = (token: string) =>
  useQuery<User>({
    queryKey: ['authUser'],
    queryFn: () => getAuthUser(token),
  })

export default useAuthUser
