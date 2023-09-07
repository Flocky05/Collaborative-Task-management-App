import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './component/Body/Body.jsx';
import Main from './component/Main/Main.jsx';
import MyTask from './component/My-Task/MyTask.jsx';
import Inbox from './component/Inbox/Inbox.jsx';
import Create from './component/Create/Create.jsx';
import Login from './component/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
        {
          path:"/",
          element:<Body></Body>,
        },
        {
          path:"/my-task",
          element:<MyTask></MyTask>
        },
        {
          path:"/inbox",
          element:<Inbox></Inbox>
        },
        {
          path:"/create",
          element:<Create></Create>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
