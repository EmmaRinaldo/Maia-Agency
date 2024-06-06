import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Blog from './pages/Blog.jsx'
import Test from './pages/Test.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Account from './pages/Account.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/test",
    element: <Test />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/a-propos",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/compte",
    element: < Account/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
