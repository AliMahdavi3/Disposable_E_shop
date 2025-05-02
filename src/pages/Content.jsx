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
import SingleArticle from './blog/SingleArticle';
import ScrollToTop from '../components/ScrollToTop';
import CategoryResultPage from './home/category/CategoryResultPage';
import SearchResultPage from './home/search/SearchResultPage';
import ForgotPassword from './auth/addition/ForgotPassword';
import ResetPassword from './auth/addition/ResetPassword';
import Redirect from './auth/addition/Redirect';
import Checkout from './cart/order/Checkout';
import PaymentConfirmation from './cart/order/PaymentConfirmation';


const Content = () => {

  return (
    <section>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<SingleProduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:articleId' element={<SingleArticle />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout/:orderId' element={<Checkout />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<SearchResultPage />} />
        <Route path='/products/category/:category' element={<CategoryResultPage />} />

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/reset-password/:token' element={<ResetPassword/>} />
        <Route path='/redirect' element={<Redirect/>} />
        
        <Route path='*' element={<Home />} />
      </Routes>
    </section>
  )
}

export default Content
