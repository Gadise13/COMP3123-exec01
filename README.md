
# React Redux + JWT Demo

A minimal React application demonstrating Redux concepts and JWT-based authentication.

## Redux Concepts
- **State**: `auth` state with `token`, `user`, `isAuthenticated`.
- **Store**: Created via `configureStore`.
- **Reducer**: Handles state changes (`authSlice`).
- **Action**: `login` (async), `logout` (sync).
- **Dispatch**: Used in `Login` and `Navbar`.
- **Subscribe**: Logs state changes in `main.jsx`.

## JWT Concept
- Mock JWT generated on login.
- Decoded using `jwt-decode` to show user info.

## Run Locally
```bash
npm install
npm run dev
