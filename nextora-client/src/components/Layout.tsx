import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function Layout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <>
      <header className="header">
        <nav>
          <Link to="/prijave">Prijave</Link>
          <Link to="/profil">Profil</Link>
        </nav>
        <div>
          <span>{user?.email}</span> <button onClick={handleLogout}>Odjava</button>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  )
}
