import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import Cart from './components/Cart';
import Homepage from './components/Homepage';
import './index.css'
import Context from './Context'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Context >
    <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
