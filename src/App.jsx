
import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import Login from './components/Login'
import ProtectedPage from './components/ProtectedPage'

export default function App() {
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated)
  return (
    <div style={{ fontFamily: 'system-ui', maxWidth: 800, margin: '2rem auto' }}>
      <Navbar />
      <h1>React Redux + JWT Demo</h1>
      <p>This demo shows Redux concepts and a simple JWT-based auth flow.</p>
      {isAuthenticated ? <ProtectedPage /> : <Login />}
    </div>
  )
}
