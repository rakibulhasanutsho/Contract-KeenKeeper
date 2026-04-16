import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from "react-router/dom";
import MainLayout from './layout/mainlayout/MainLayout'
import Homepage from './pages/homepage/Homepage'
import TimeLine from './pages/timeline/TimeLine'

import FriendDetailsPage from './pages/friendsdetails/FriendDetailsPage';
import FriendProvider from './components/friendcontext/FriendContext';
import StatusPage from './pages/statuspage/StatusPage';
import NotFoundPage from './pages/notfound/NotFoundPage';
const router = createBrowserRouter(
[
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        index:true,
        element:<Homepage></Homepage>,
        loader:()=>fetch("/friends.json")
      },
      {
        path:"/timeline",
        element:<TimeLine></TimeLine>
      },
      {
        path:"/statuspage",
        element: <StatusPage></StatusPage>
      },
      {
        path:"/friendsdetails/:friendId",
        element:<FriendDetailsPage></FriendDetailsPage>,
        loader:()=>fetch("/friends.json")
      },
      {
        path:"*",
        element: <NotFoundPage></NotFoundPage>
      }

    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <FriendProvider>
        <RouterProvider router={router} />,
      </FriendProvider>

  </StrictMode>,
)
