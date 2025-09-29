import { useState } from 'react'
import type { User } from '../../../types/user'
import SignUpForm from '../components/SignUpForm'
import SignUpHeader from '../components/SignUpHeader'
import { useUsers } from '../hooks/useUser'
import { AxiosError } from 'axios'

const SignUpPage = () => {
  const { mutate: createUser, data: response, isSuccess: isCreateUserSuccess, error } = useUsers()
  const emptyUser: User = { name: '', email: '', password: '', admin: false }
  const [user, setUser] = useState<User>(emptyUser)
  // const [axiosError, setAxiosError] = useState<AxiosError>()
  // if (error && error) setAxiosError(error as AxiosError)
  console.log(typeof error)
  return (
    <div className="flex flex-col gap-3 p-4">
      <ul>{error && ((error as AxiosError).response?.data as string[]).map((e, index) => <li key={index}>{e}</li>)}</ul>
      {isCreateUserSuccess && <div>Success register the User. {response.email}</div>}
      <SignUpHeader />
      <SignUpForm
        user={user}
        setUser={setUser}
        handleUserSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          createUser(user)
        }}
        handleReset={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          setUser(emptyUser)
        }}
      />
    </div>
  )
}

export default SignUpPage
