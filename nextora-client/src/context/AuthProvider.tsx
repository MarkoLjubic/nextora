import { useState, type ReactNode } from 'react'
import { AuthContext } from './auth-context'
import type { User } from '../types/auth'

const STORAGE_KEY = 'nextora_user'

function loadUser(): User | null {
  const raw = localStorage.getItem(STORAGE_KEY)
  return raw ? (JSON.parse(raw) as User) : null
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(loadUser)

  // TODO: zameniti pozivom ka backend API-ju kada bude spreman
  const login = async (email: string, _password: string) => {
    const fakeUser: User = { id: '1', email, name: email.split('@')[0] ?? email }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fakeUser))
    setUser(fakeUser)
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: user !== null, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
