import React from 'react'
import { FaHamburger, FaTimesCircle } from 'react-icons/fa'

const MenuButton = ({ isMenuOpen, toggleMenu }) => {
    return (
        <div className='md:hidden flex z_index'>
            {
                isMenuOpen ? (
                    <button
                        onClick={toggleMenu}
                        className='rounded-lg p-1 text-gray-100 bg-rose-500 
                        transition duration-1000 text-base'>
                        <FaTimesCircle />
                    </button>
                ) : (
                    <button
                        onClick={toggleMenu}
                        className=' transition duration-1000 text-white text-2xl'>
                        <FaHamburger className='text-white' />
                    </button>
                )
            }
        </div>
    )
}

export default MenuButton
