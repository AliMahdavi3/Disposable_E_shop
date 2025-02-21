import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import { useNavbarContext } from '../../context/NavbarContext';
import Brand from './navbarSections/Brand';
import PageLink from './navbarSections/PageLink';
import Buttons from './navbarSections/Buttons';
import MenuButton from './navbarSections/MenuButton';
import MobilePageLink from './navbarSections/mobileMenu/MobilePageLink';
import BottomNavbar from './navbarSections/mobileMenu/BottomNavbar';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const { isSolid, cartCount } = useNavbarContext();
  const [localCartCount, setLocalCartCount] = useState(cartCount);

  useEffect(() => {
    setLocalCartCount(cartCount);
  }, [cartCount]);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


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
      <nav
        className={`${isSolid ? 'bg-gradient-to-r from-mgreen to-[#0dafa7]' : isNavbarScrolled ?
          "bg-gradient-to-r from-mgreen to-[#0dafa7]" : "bg-transparent"} 
          h-fit py-5 rounded-b-2xl fixed top-0 z-50 w-full`}
      >
        <div className='container flex justify-between items-center relative'>
          <Brand />
          <PageLink />
          <Buttons isLoggedIn={isLoggedIn} cartCount={cartCount} />
          <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <MobilePageLink closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
        </div>
      </nav>
      <BottomNavbar isLoggedIn={isLoggedIn} cartCount={cartCount} />
    </header>
  )
}

export default Navbar
