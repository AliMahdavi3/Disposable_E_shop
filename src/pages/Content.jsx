import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home'
import Products from './products/Products'
import SingleProduct from './products/SingleProduct';
import About from './aboutUs/About';
import Blog from './blog/Blog';
import ContactUs from './contactUs/ContactUs';
import Cart from './cart/Cart';
import Profile from './user-profile/Profile';
import Login from './auth/login/Login';
import Register from './auth/register/Register';

const Content = () => {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<SingleProduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />



        <Route path='*' element={<Home />} />
      </Routes>
    </section>
  )
}

export default Content
