import  React,{ components } from 'react'
import Header from './components/Header/Header.jsx'
import {Outlet} from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx'

function Layout() {
  return (
    <>
     <Header />
     <Outlet />
     <Footer /> 
    </>
  )
}

export default Layout;