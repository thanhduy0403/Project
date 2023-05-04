import React from 'react'
import Header from './Header';
import { Outlet, Link } from "react-router-dom";

import "./Custom.css"

const Layout = () => {
  return (
   <>
    <Header/>
       <Outlet />
  
   </>
  )
}

export default Layout