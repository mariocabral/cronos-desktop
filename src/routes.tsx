import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Profesionals = React.lazy(() => import('./views/profesionals/Profesionals'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/profesionals', name: 'Profesionals', element: Profesionals },
]

export default routes
