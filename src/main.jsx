import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './composables/i18n.js'

import App from './App.jsx'
import About from "./pages/About.jsx";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Base from "./pages/Base.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Base/>
      },
      {
        path: '/about',
        element: <About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

