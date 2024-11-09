import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './error-page'
import Contact from './routes/contact'
import {loader as rootLoader, action as rootAction} from './routes/root.jsx'
import { getContactLoader } from './loader/contactsLoader.js'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action:rootAction,
    children:[
      {
        path:'contacts/:contactId',
        element: <Contact/>,
        loader: getContactLoader,
      },

    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
