import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index : true, Component: Home},
      {path : "Mobiles", Component : Mobiles},
      {path : "Laptops", Component : Laptops}
    ]
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
