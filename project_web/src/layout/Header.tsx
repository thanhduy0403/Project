import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Addtocart from '../compunents/Addtocart';
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
     <>
     <div className='container'> 
        <div className='header-main d-flex'>
      <div className='header-logo'>Elctrican</div>
          <div className='header-nav'>
          <nav>
        <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Product">Product</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
         <Addtocart icon={<AiOutlineShoppingCart/>}/>
        </ul>
        </nav>
      </div>
     </div>
   </div>
  
   </>
  )
}

export default Header