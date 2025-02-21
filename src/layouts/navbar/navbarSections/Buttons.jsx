import React from 'react'
import { FaCartArrowDown, FaUserCircle, FaSignInAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Buttons = ({ isLoggedIn, cartCount }) => {
    return (
        <div className='flex'>
            {
                !isLoggedIn() ? (
                    <NavLink to="/login" className="hidden md:block text-white text-2xl ml-4">
                        <FaSignInAlt />
                    </NavLink>
                ) : (
                    <NavLink to="/profile" className="hidden md:block text-white text-2xl ml-4">
                        <FaUserCircle />
                    </NavLink>
                )
            }

            <NavLink to="/cart" className="hidden md:block text-white text-2xl relative">
                <FaCartArrowDown />
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-rose-600 
                        text-xs text-white px-1.5 py-0.5 rounded-full"
                    >
                        {cartCount}
                    </span>
                )}
            </NavLink>

        </div>
    )
}

export default Buttons
