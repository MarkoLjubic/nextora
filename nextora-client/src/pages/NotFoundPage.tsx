import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="auth-page">
      <h1>404 – Stranica ne postoji</h1>
      <Link to="/">Početna</Link>
    </section>
  )
}
