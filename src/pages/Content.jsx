import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home'
import Products from './products/Products'
import SingleProduct from './products/SingleProduct';
import About from './aboutUs/About';

const Content = () => {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/singleProduct' element={<SingleProduct />} />
        <Route path='/about' element={<About />} />



        <Route path='*' element={<Home />} />
      </Routes>
    </section>
  )
}

export default Content
