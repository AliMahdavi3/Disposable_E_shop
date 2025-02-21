import React, { useState } from 'react'
import { BiSolidCategory } from 'react-icons/bi'
import { FaCartArrowDown, FaHome, FaUserCircle, FaShoppingBag, FaSignInAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import MobileCategory from '../../../../pages/home/category/MobileCategory'

const NavItem = ({ to, icon, label, cartCount, onClick }) => {

    return (
        <NavLink
            to={to}
            onClick={onClick}
            className="text-white flex justify-center items-center
            flex-col text-xl relative"
        >
            <span>
                {icon}
            </span>
            {cartCount > 0 && to === "/cart" && (
                <span
                    className="absolute -top-1 -right-1 bg-rose-600 
                    text-xs text-white px-1.5 py-0.5 rounded-full"
                >
                    {cartCount}
                </span>
            )}
            <span className='text-xs mt-1'>
                {label}
            </span>
        </NavLink>
    )
}

const BottomNavbar = ({ isLoggedIn, cartCount }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav
                className="md:hidden h-fit py-2 rounded-t-xl border-t-2
            fixed bg-gradient-to-r from-mgreen to-[#0dafa7] bottom-0 z_index w-full"
            >
                <div className='px-3 flex justify-between items-center'>

                    <NavItem
                        to="/"
                        icon={<BiSolidCategory />}
                        onClick={() => setOpen(true)}
                        label="دسته بندی"
                    />

                    <NavItem to="/products" icon={<FaShoppingBag />} label="محصولات" />

                    <div className='mx-3'>
                        <NavItem to="/" icon={<FaHome />} label="خانه" />
                    </div>

                    <NavItem to="/cart" icon={<FaCartArrowDown />} label="سبد خرید"
                        cartCount={cartCount} />

                    {
                        !isLoggedIn() ? (
                            <div className='mx-2'>
                                <NavItem to="/login" icon={<FaSignInAlt />} label="ورود" />
                            </div>
                        ) : (
                            <NavItem to="/profile" icon={<FaUserCircle />} label="حساب من" />
                        )
                    }

                </div>
            </nav>
            <MobileCategory open={open} setOpen={setOpen} />
        </>
    )
}

export default BottomNavbar
