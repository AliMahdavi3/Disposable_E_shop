import React, { useEffect, useState } from 'react'
import { FaCartArrowDown, FaWindowClose, FaUserCircle, FaBars } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };


  return (
    <header className={`h-16 navbar fixed top-0 z-50 w-full ${isNavbarScrolled ? "footer_bg" : "bg-transparent"}`}>
      <nav className='container flex justify-between items-center pt-3'>
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
          <a href="/" className="text-white text-2xl ml-4"><FaUserCircle /></a>
          <a href="/" className="md:hidden text-white ml-4 text-2xl"><BiSolidCategory /></a>
          <a href="/" className="text-white text-2xl ml-4"><FaCartArrowDown /></a>
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

        <ul className={`md:hidden rounded-3xl absolute top-16 mt-1 left-0 right-0 bg-mgreen text-white text-center transition-all duration-2000 ${isMenuOpen ? 'max-h-screen' : 'max-h-0'} ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
          <li><NavLink to="/"  onClick={closeMenu} className={`${isMenuOpen ? "navbar_shadow block font-semibold py-6 transition duration-100 hover:text-gray-300" : "hidden"} `}>خانه</NavLink></li>
          <li><NavLink to="/products"  onClick={closeMenu} className={`${isMenuOpen ? "navbar_shadow block font-semibold py-6 transition duration-150 hover:text-gray-300" : "hidden"} `}>محصولات</NavLink></li>
          <li><NavLink to="/about"  onClick={closeMenu} className={`${isMenuOpen ? "navbar_shadow block font-semibold py-6 transition duration-200 hover:text-gray-300" : "hidden"} `}>درباره ما</NavLink></li>
          <li><NavLink to="/blog"  onClick={closeMenu} className={`${isMenuOpen ? "navbar_shadow block font-semibold py-6 transition duration-300 hover:text-gray-300" : "hidden"} `}>بلاگ</NavLink></li>
          <li><NavLink to="/contact"  onClick={closeMenu} className={`${isMenuOpen ? "navbar_shadow block font-semibold py-6 transition duration-700 hover:text-gray-300" : "hidden"} `}>تماس با ما</NavLink></li>
        </ul>

      </nav>
    </header>
  )
}

export default Navbar
