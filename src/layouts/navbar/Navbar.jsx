import React, { useEffect, useState } from 'react'
import { FaCartArrowDown, FaWindowClose, FaUserCircle, FaBars, FaHome } from "react-icons/fa";
import { TbLogin } from "react-icons/tb";
import { BiSolidCategory } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useNavbarContext } from '../../context/NavbarContext';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { isSolid } = useNavbarContext();

  useEffect(() => {
    fetchedCartCount();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchedCartCount = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:4000/api/cart/count', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCartCount(response.data.count);
    } catch (error) {
      console.error('Error fetching cart count:', error);
    }
  }

  const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp > currentTime;
    }
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsNavbarScrolled(true);
    } else {
      setIsNavbarScrolled(false);
    }
  };


  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };



  return (
    <header >

      <nav className={`h-fit py-5 rounded-b-2xl fixed top-0 z-50 w-full
       ${isSolid ? 'bg-mgreen' : isNavbarScrolled ? "bg-gradient-to-r from-mgreen to-[#1F917C]" : "bg-transparent"}`}>
        <div className='container flex justify-between items-center'>

          <div>
            <a href="/" className='navbar_shadow text-white text-2xl font-bold'>LOGO</a>
          </div>

          <ul className='hidden md:flex md:flex-grow md:justify-center text-white'>
            <li><NavLink to="/" className="navbar_shadow ml-6 font-semibold text-xl transition duration-1000 hover:text-gray-300">خانه</NavLink></li>
            <li><NavLink to="/products" className="navbar_shadow ml-6 font-semibold text-xl transition duration-1000 hover:text-gray-300">محصولات</NavLink></li>
            <li><NavLink to="/about" className="navbar_shadow ml-6 font-semibold text-xl transition duration-1000 hover:text-gray-300">درباره ما</NavLink></li>
            <li><NavLink to="/blog" className="navbar_shadow ml-6 font-semibold text-xl transition duration-1000 hover:text-gray-300">بلاگ</NavLink></li>
            <li><NavLink to="/contact" className="navbar_shadow ml-6 font-semibold text-xl transition duration-1000 hover:text-gray-300">تماس با ما</NavLink></li>
          </ul>

          <div className='flex'>

            {
              !isLoggedIn() ? (
                <NavLink to="/login" className="hidden md:block text-white text-2xl ml-4">
                  <TbLogin />
                </NavLink>
              ) : (
                <NavLink to="/profile" className="hidden md:block text-white text-2xl ml-4">
                  <FaUserCircle />
                </NavLink>
              )
            }

            <NavLink to="/cart" className="hidden md:block text-white text-2xl ml-4 relative">
              <FaCartArrowDown />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-600 text-xs text-white px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </NavLink>

          </div>


          <div className='md:hidden flex'>
            {
              isMenuOpen ? (
                <button onClick={toggleMenu} className=' transition duration-1000
               text-white text-2xl ml-4'>
                  <FaWindowClose className='text-red-600' />
                </button>
              ) : (
                <button onClick={toggleMenu} className=' transition duration-1000
               text-white text-2xl ml-4'>
                  <FaBars />
                </button>
              )
            }
          </div>

          <ul className={`md:hidden rounded-3xl absolute top-20 mt-1 left-0 right-0 bg-mgreen text-white text-center transition-all duration-2000 ${isMenuOpen ? 'max-h-screen' : 'max-h-0'} ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <li><NavLink to="/" onClick={closeMenu} className={`${isMenuOpen ? "navbar_shadow block font-semibold py-6 transition duration-100 hover:text-gray-300" : "hidden"} `}>خانه</NavLink></li>
            <li><NavLink to="/products" onClick={closeMenu} className={`${isMenuOpen ? "navbar_shadow block font-semibold py-6 transition duration-150 hover:text-gray-300" : "hidden"} `}>محصولات</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu} className={`${isMenuOpen ? "navbar_shadow block font-semibold py-6 transition duration-200 hover:text-gray-300" : "hidden"} `}>درباره ما</NavLink></li>
            <li><NavLink to="/blog" onClick={closeMenu} className={`${isMenuOpen ? "navbar_shadow block font-semibold py-6 transition duration-300 hover:text-gray-300" : "hidden"} `}>بلاگ</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu} className={`${isMenuOpen ? "navbar_shadow block font-semibold py-6 transition duration-700 hover:text-gray-300" : "hidden"} `}>تماس با ما</NavLink></li>
          </ul>
        </div>

      </nav>


      <nav className="md:hidden h-fit py-2 rounded-t-xl bg-mgreen fixed bottom-0 z-50 w-full">
        <div className='container flex justify-between items-center'>

          <NavLink to="/" className="text-white flex justify-center items-center
             flex-col text-2xl ml-4">
            <FaHome />
            <span className='text-xs mt-1'>خانه</span>
          </NavLink>

          <a href="/" className="text-white flex justify-center items-center
             flex-col ml-4 text-2xl">
            <BiSolidCategory />
            <span className='text-xs mt-1'>دسته بندی</span>
          </a>

          <NavLink to="/cart" className="text-white flex justify-center items-center flex-col text-2xl ml-4 relative">
            <FaCartArrowDown />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-600 text-xs text-white px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
            <span className='text-xs mt-1'>سبد خرید</span>
          </NavLink>

          {
            !isLoggedIn() ? (
              <NavLink to="/profile" className="text-white flex justify-center items-center
                flex-col text-2xl ml-4 ms-1">
                <TbLogin />
                <span className='text-xs mt-1'>ورود</span>
              </NavLink>
            ) : (
              <NavLink to="/profile" className="text-white flex justify-center items-center
                flex-col text-2xl ml-4">
                <FaUserCircle />
                <span className='text-xs mt-1'>حساب کاربری</span>
              </NavLink>
            )
          }

        </div>
      </nav>

    </header>
  )
}

export default Navbar
