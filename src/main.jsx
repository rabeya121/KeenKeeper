import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router =createBrowserRouter([
  {
    path:'/',
    element: 'Homepage',
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
    <h2 className='text-blue-400 text-center'>Hello, React!</h2>
  </StrictMode>,
)
