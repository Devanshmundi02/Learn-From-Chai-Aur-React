import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github  from './components/Github/Github.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"user/:userId",
        element:<User/>
      },
      {
        path:"/Github",
        element:<Github/>,
        loader: ( async () =>{
          const res = await fetch('https://api.github.com/users/Devanshmundi02')
          return res.json();
        })
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
