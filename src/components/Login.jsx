
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/slices/authSlice'

export default function Login() {
  const dispatch = useDispatch()
  const status = useSelector(s => s.auth.status)
  const error = useSelector(s => s.auth.error)
  const [email, setEmail] = useState('demo@example.com')
  const [password, setPassword] = useState('password')

  const onSubmit = e => {
    e.preventDefault()
    dispatch(login({ email, password }))
  }

  return (
    <form onSubmit={onSubmit} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: 8 }}>
      <h2>Login</h2>
      <label>Email<br />
        <input value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <label>Password<br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Logging in...' : 'Login'}
      </button>
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
    </form>
  )
}
