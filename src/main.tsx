import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home/index.tsx'
import LoginPage from './pages/login/index.tsx'
import AuthContextProvider from './contexts/AuthContext/AuthContext.tsx'
import { CasaProvider } from './contexts/CasaContext/CasaContext.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <CasaProvider>
        <HomePage/>
      </CasaProvider>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/hello-world",
    element: <h1>Hello World</h1>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router}/>
    </AuthContextProvider>
  </StrictMode>,
)
