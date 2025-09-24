import { create } from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'

interface AuthStore {
  email: string
  password: string
  jwtToken: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setToken: (token: string) => void
  reset: () => void
  logout: () => void
}

const useAuthStore = create<AuthStore>((set) => ({
  email: '',
  password: '',
  jwtToken: '',
  onChange: (e) => {
    e.preventDefault()
    const { name, value } = e.target
    set((store) => ({ ...store, [name]: value }))
  },
  setToken: (token) => {
    set(() => ({ jwtToken: token }))
  },
  reset: () => {
    set(() => ({ email: '', password: '' }))
  },
  logout: () => {
    set(() => ({}))
  },
}))

if (process.env.NODE_ENV === 'development') mountStoreDevtool('Auth store', useAuthStore)

export default useAuthStore
