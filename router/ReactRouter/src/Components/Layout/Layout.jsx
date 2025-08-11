import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { Link,NavLink } from 'react-router';

function Layout() {
  return (
   <>
   <Header/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default Layout