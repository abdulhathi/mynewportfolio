import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../features/login/store/useLoginStore'
import useAuthUser from '../features/login/hooks/useAuthUser'

const Header = () => {
  const { jwtToken, setToken, reset } = useAuthStore()
  const { data: user, isSuccess } = useAuthUser(jwtToken)
  const navigate = useNavigate()
  return (
    <header className="bg-blue-500 text-white px-2 py-1 w-full">
      <nav className="flex justify-between items-center">
        <div className="flex gap-4 self-start items-center">
          <Link to="/" className="text-3xl font-bold">
            Portfolio
          </Link>
        </div>
        <div className="flex gap-4">
          <Link to="/profilesidebyside">Profile Side-by-Side</Link>
          <Link to="/mynewprofile">New-Profile</Link>
          <Link to="/document">Export to Document</Link>
          {jwtToken && user?.admin && (
            <div className="flex gap-4">
              <Link to="/summary">Summary</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/download">Download</Link>
            </div>
          )}
          {jwtToken !== '' ? (
            <div className="flex flex-row gap-2">
              <div>{isSuccess && user.name}</div>
              <button
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  reset()
                  setToken('')
                  navigate('/login')
                }}
              >
                Log out
              </button>
            </div>
          ) : (
            <Link to="/login">Log in</Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
