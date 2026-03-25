import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home/index.tsx'
import LoginPage from './pages/login/index.tsx'
import AuthContextProvider from './contexts/AuthContext/AuthContext.tsx'
import { CasaProvider } from './contexts/CasaContext/CasaContext.tsx'
import CasaDetalhesPage from './pages/casa/index.tsx'
import { UsuarioProvider } from './contexts/UsuarioContext/UsuarioContext.tsx'
import { AvaliacaoProvider } from './contexts/AvaliacaoContext/AvaliacaoContext.tsx'


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
  },
  {
    path: "/casa/:id", 
    element: 
    <CasaProvider>
      <UsuarioProvider>
        <AvaliacaoProvider>
          <CasaDetalhesPage />,
        </AvaliacaoProvider>
      </UsuarioProvider>
    </CasaProvider>
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router}/>
    </AuthContextProvider>
  </StrictMode>,
)
