import { Link, useParams } from 'react-router-dom'

export function PrijavaDetailPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <section>
      <h1>Prijava #{id}</h1>
      <Link to="/prijave">← Nazad na prijave</Link>
    </section>
  )
}
