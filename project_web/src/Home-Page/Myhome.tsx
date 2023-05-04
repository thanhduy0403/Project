import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../compunents/Home';
import Product from '../compunents/Product';
import Login from '../compunents/Login';
import Layout from '../layout/Layout';
const Myhome = () => {
  return (
    <>
     <BrowserRouter> 
        <Routes>
        <Route path='/' element={<Layout/>} >
           <Route index element = {<Home/>} />
           <Route path='/product' element={<Product />} />
            <Route path='/login' element={<Login />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Myhome