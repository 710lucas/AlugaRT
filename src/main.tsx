import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home/index.tsx'
import CasaDetalhesPage from './pages/casa/index.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/hello-world",
    element: <h1>Hello World</h1>
  },
  {
    path: "/casa/:id", 
    element: <CasaDetalhesPage />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
