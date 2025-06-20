// import React, { Children, Component } from 'react'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import ReactDOM from 'react-dom/client'
// import User from './components/User/User.jsx'
// import {createBrowserRouter,Router,RouterProvider} from 'react-router-dom'
// import Layout from './Layout.jsx'
// import About from './components/About/About.jsx'
// import Home from './components/Home/Home.jsx'
// import Contact from './components/Contact/Contact.jsx'
// import Github from './components/Github/Github.jsx'
// // const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     element: <Layout />,
// //     children: [
// //       {
// //         path: "",
// //         element:<Home />
// //       },
// //       {
// //         path:"About",
// //         element:<About />
// //       },
// //       {
// //         path:"Contact",
// //         element:<Contact />
// //       },
// //       {
// //         path:"Github",
// //         element:<Github />
// //       },
// //       {
// //         path:"User",
// //         element:< User/>
// //       }
// //     ]
// //   }
// // ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='user/:userid' element={<User />} />
//       <Route 
//       loader={githubInfoLoader}
//       path='github' 
//       element={<Github />}
//        />
//     </Route>
//   )
// )


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router = {router}/>
//   </StrictMode>,
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='Github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)