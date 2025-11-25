
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode'

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
  const payload = {
    sub: '123',
    email,
    name: 'Demo User',
    exp: Math.floor(Date.now() / 1000) + 60 * 60
  }
  const base64 = btoa(JSON.stringify(payload))
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${base64}.signature`
  await new Promise(r => setTimeout(r, 500))
  return token
})

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
  status: 'idle',
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null
      state.user = null
      state.isAuthenticated = false
      state.status = 'idle'
      state.error = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.token = action.payload
        try {
          state.user = jwtDecode(action.payload)
        } catch (e) {
          state.error = 'Invalid token'
        }
        state.isAuthenticated = !!state.user
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error?.message || 'Login failed'
      })
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer
