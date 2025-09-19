import Button from '../../../corecomponents/Button'
import Input from '../../../corecomponents/Input'
import type { User } from '../../../types/user'

interface SignUpFormProps {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
  handleUserSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleReset: (e: React.FormEvent<HTMLFormElement>) => void
}

const SignUpForm = ({ user, setUser, handleUserSubmit, handleReset }: SignUpFormProps) => {
  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUser((u: User) => {
      const { name, value } = e.target
      return { ...u, [name]: value }
    })
  }
  return (
    <form onSubmit={handleUserSubmit} onReset={handleReset} className="flex flex-col gap-3 w-70">
      <label className="flex items-center justify-between w-80">
        <span>Name</span>
        <Input value={user.name} name="name" placeholder="Full name" onChange={handleUserChange} required></Input>
      </label>
      <label className="flex items-center justify-between w-80">
        <span>Email</span>
        <Input value={user.email} name="email" placeholder="Email" onChange={handleUserChange} required></Input>
      </label>
      <label className="flex items-center justify-between w-80">
        <span>Password</span>
        <Input
          value={user.password}
          name="password"
          placeholder="Password"
          onChange={handleUserChange}
          required
        ></Input>
      </label>
      <div className="flex gap-2">
        <Button type="submit">SignUp</Button>
        <Button type="reset">Reset</Button>
      </div>
    </form>
  )
}

export default SignUpForm
