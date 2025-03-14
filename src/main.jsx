import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// páginas
import Login from './routes/Login.jsx'
import Register from './routes/Register.jsx'
import ForgetPassword from './routes/ForgetPassword.jsx'
import Home from './routes/Home.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }, 
      {
        path: '/forget-password',
        element: <ForgetPassword />
      }
    ],
  },
  {
    element: <Home />,
    path: '/home'
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
