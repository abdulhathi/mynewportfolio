import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../corecomponents/Button'
import Input from '../../../corecomponents/Input'
import type { User } from '../../../types/user'
import { useLogin } from '../hooks/useLogin'
import useLoginStore from '../store/useLoginStore'

const Login = () => {
  const { mutate: login, data, isSuccess, isError, error } = useLogin()

  const { email, password, jwtToken, onChange, setToken, reset } = useLoginStore()
  const loginSuccess = <h1 className="p-4 text-6xl font-bold">Login Success</h1>

  const navigate = useNavigate()

  if (jwtToken) return loginSuccess
  if (isSuccess) {
    setToken(data)
    navigate('/')
  }
  if (isError) console.log(error)
  return (
    <div className="p-4 flex flex-col gap-4 w-[30%]">
      <h1 className="text-6xl font-bold">Login</h1>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          login({ email, password } as User)
        }}
        onReset={(e) => {
          e.preventDefault()
          reset()
        }}
      >
        <label className="flex gap-2 justify-between w-full items-center">
          <span>Email / User name</span>
          <Input name="email" required onChange={onChange} value={email} placeholder="Email / User name"></Input>
        </label>
        <label className="flex gap-2 justify-between w-full items-center">
          <span>Password</span>
          <Input
            name="password"
            onChange={onChange}
            required
            value={password}
            type="password"
            placeholder="Password"
          ></Input>
        </label>
        <div className="flex flex-row gap-2 items-center">
          <Button type="submit">Log in</Button>
          <Button type="reset">Reset</Button>
          <Button type="button">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Login
