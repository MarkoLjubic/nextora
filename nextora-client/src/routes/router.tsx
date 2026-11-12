import { createBrowserRouter, Navigate } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { Layout } from '../components/Layout'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { PrijavePage } from '../pages/PrijavePage'
import { PrijavaDetailPage } from '../pages/PrijavaDetailPage'
import { ProfilPage } from '../pages/ProfilPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  // Javne rute
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },

  // Zaštićene rute – neautorizovan korisnik ide na /login
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: '/', element: <Navigate to="/prijave" replace /> },
          { path: '/prijave', element: <PrijavePage /> },
          { path: '/prijave/:id', element: <PrijavaDetailPage /> },
          { path: '/profil', element: <ProfilPage /> },
        ],
      },
    ],
  },

  { path: '*', element: <NotFoundPage /> },
])
