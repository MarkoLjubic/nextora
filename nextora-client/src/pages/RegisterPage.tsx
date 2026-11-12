import { Link } from 'react-router-dom'

export function RegisterPage() {
  return (
    <div className="auth-page">
      <h1>Registracija</h1>
      <p>Forma za registraciju (TODO)</p>
      <p>
        Već imaš nalog? <Link to="/login">Prijavi se</Link>
      </p>
    </div>
  )
}
