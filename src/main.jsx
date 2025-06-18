import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello From React World</div>,
  },
  {
    path : 'about',
    element : <div>About me section</div>
  },
  {
    path : 'blogs',
    element : <div>All my Blogs are here</div>
  },
  {
    // path : 'app1',
    // Component : App
  },
  {
    path : 'app2',
    element : <App></App>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
