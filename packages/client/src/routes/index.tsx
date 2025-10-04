import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import NotFound from '../pages/NotFound'
import SummariesPage from '../features/profile/summaries/pages/SummariesPage'
import SkillsPage from '../features/profile/skills/pages/SkillsPage'
import SignUpPage from '../features/signup/pages/SignUpPage'
import Welcome from '../features/welcome/pages/Welcome'
import Login from '../features/login/pages/Login'
import ProfileView from '../features/profileView/pages/ProfileView'
import ProfileViewSideBySide from '../features/profileView/pages/ProfileViewSideBySide'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Welcome /> },
      { path: 'summary', element: <SummariesPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'mynewprofile', element: <ProfileView /> },
      { path: 'profilesidebyside', element: <ProfileViewSideBySide /> },
      { path: 'signup', element: <SignUpPage /> },
      { path: 'login', element: <Login /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
