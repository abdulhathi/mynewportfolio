import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('about', 'routes/about.tsx'),
  route('profile', 'profile/myprofile.tsx'),
  layout('auth/layout.tsx', [route('login', 'auth/login.tsx'), route('register', 'auth/register.tsx')]),
] satisfies RouteConfig
