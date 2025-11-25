
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/slices/authSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const user = useSelector(s => s.auth.user)
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated)
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
      <div><strong>Redux + JWT</strong></div>
      <div>
        {isAuthenticated ? (
          <>
            <span style={{ marginRight: '1rem' }}>Hello, {user?.name}</span>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          <span>Not logged in</span>
        )}
      </div>
    </nav>
  )
}
