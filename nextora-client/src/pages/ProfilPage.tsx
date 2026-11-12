import { useAuth } from '../hooks/useAuth'

export function ProfilPage() {
  const { user } = useAuth()

  return (
    <section>
      <h1>Profil</h1>
      <p>Ime: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </section>
  )
}
