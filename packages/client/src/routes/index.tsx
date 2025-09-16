import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import MyProfile from '../features/profile/profile/MyProfile'
import SummariesPage from '../features/profile/summaries/pages/SummariesPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'summary', element: <SummariesPage /> },
      { path: 'myprofile', element: <MyProfile /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
