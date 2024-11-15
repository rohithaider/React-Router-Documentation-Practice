import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './error-page'
import Contact from './routes/contact'
import {loader as rootLoader, action as rootAction} from './routes/root.jsx'
import { getContactLoader } from './loader/contactsLoader.js'
import EditContact from './routes/edit.jsx'
import { editAction } from './loader/editAction.js'
import { deleteAction } from './loader/deleteAction.js'
import Index from './routes/index.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action:rootAction,
    children:[
      {
        index:true,
        element:<Index/>
      },
     {
        path:'contacts/:contactId',
        element: <Contact/>,
        loader: getContactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: deleteAction,
        errorElement: <div>Oops! There was an error.</div>,
      },

    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
