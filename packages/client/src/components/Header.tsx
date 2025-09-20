import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-blue-500 text-white px-4 py-2 w-full">
      <nav className="flex justify-between">
        <div className="flex gap-4 self-start">
          <Link to="/">Home</Link>
          <Link to="/summary">Summary</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/myprofile">Profile</Link>
          <Link to="/download">Download</Link>
        </div>
        <div className="flex gap-4">
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
