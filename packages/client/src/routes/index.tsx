import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import MyProfile from '../features/profile/profile/MyProfile'
import SummariesPage from '../features/profile/summaries/pages/SummariesPage'
import SkillsPage from '../features/profile/skills/pages/SkillsPage'
import SignUpPage from '../features/signup/pages/SignUpPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'summary', element: <SummariesPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'myprofile', element: <MyProfile /> },
      { path: 'signup', element: <SignUpPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
