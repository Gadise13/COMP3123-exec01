
import React from 'react'
import { useSelector } from 'react-redux'

export default function ProtectedPage() {
  const user = useSelector(s => s.auth.user)
  const token = useSelector(s => s.auth.token)
  return (
    <section style={{ marginTop: '1rem' }}>
      <h2>Protected Content</h2>
      <p>You can only see this when authenticated. Here is your decoded JWT payload:</p>
      <pre style={{ background: '#f6f8fa', padding: '1rem', borderRadius: 8 }}>
        {JSON.stringify(user, null, 2)}
      </pre>
      <details>
        <summary>Raw token</summary>
        <code style={{ wordBreak: 'break-all' }}>{token}</code>
      </details>
    </section>
  )
}
