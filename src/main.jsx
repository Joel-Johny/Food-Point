import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import About from './components/About'
import Error from './components/Error'
import Contact from './components/Contact'
import RestaurantMenu from './components/RestaurantMenu'
import Profile from './components/Profile'
import AccordianDemo from './components/AccordianDemo'

const AppLayout=()=>{

    return(
        <>
        <Header/>
          <Outlet/>
        <Footer/>
      </>
    )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"",
        element:<Body/>
      },
      
      {
        path:"about",
        element:<Outlet/>,
        children:[
          {
            path:"",
            element:<About/>
          },
          {
            path:"profile",
            element:<Profile />
          }
        ]
      },
      
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"accordian",
        element:<AccordianDemo/>
      },
    
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      },
    ]
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)

// children and outlet if were not there :---
 
  // {
  //   path:"/about",
  //   element:(<><Header/>
  //           <About/>
  //           <Footer/>
  //           </>)

  // },
  //   {
  //   path:"/contact",
  //   element:(<><Header/>
  //   <Contact/>
  //   <Footer/>
  //   </>)

  // } 