import { Link } from 'react-router-dom'

export function PrijavePage() {
  return (
    <section>
      <h1>Prijave</h1>
      <ul>
        <li>
          <Link to="/prijave/1">Prijava #1</Link>
        </li>
        <li>
          <Link to="/prijave/2">Prijava #2</Link>
        </li>
      </ul>
    </section>
  )
}
