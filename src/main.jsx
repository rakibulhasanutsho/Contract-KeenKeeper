import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from "react-router/dom";
import MainLayout from './layout/mainlayout/MainLayout'
import Homepage from './pages/homepage/Homepage'
import TimeLine from './pages/timeline/TimeLine'
import StatsPage from './pages/statspage/StatsPage'
import FriendDetailsPage from './pages/friendsdetails/FriendDetailsPage';
import FriendProvider from './components/friendcontext/FriendContext';
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
        path:"/statspage",
        element: <StatsPage></StatsPage>
      },
      {
        path:"/friendsdetails/:friendId",
        element:<FriendDetailsPage></FriendDetailsPage>,
        loader:()=>fetch("/friends.json")
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
