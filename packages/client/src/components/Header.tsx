import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/summary">Summary</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/myprofile">Profile</Link>
      </nav>
    </header>
  )
}

export default Header
