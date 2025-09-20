import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
