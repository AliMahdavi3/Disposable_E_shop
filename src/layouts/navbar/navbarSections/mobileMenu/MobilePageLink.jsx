import React from 'react'
import { NavLink } from 'react-router-dom'

const MobilePageLink = ({ closeMenu, isMenuOpen }) => {

    const LinkItems = ({ to, title, className }) => {
        return (
            <li>
                <NavLink
                    to={to}
                    onClick={closeMenu}
                    className={className}>
                    {title}
                </NavLink>
            </li>
        )
    }

    return (
        <>
            <ul className={`md:hidden fixed top-0 left-0 
            right-0 bg-gradient-to-r from-mgreen to-[#0dafa7]
            text-center text-white transition-all duration-2000
            ${isMenuOpen ? 'h-screen' : 'h-0'}
            ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            >
                <LinkItems
                    to={"/"}
                    title={"خانه"}
                    className={`${isMenuOpen ? "mt-[23%] rounded-xl border-t-2 navbar_shadow block text-sm font-medium py-6 transition duration-100 hover:text-gray-300" : "hidden"}`}
                />
                <LinkItems
                    to={"/products"}
                    title={"محصولات"}
                    className={`${isMenuOpen ? "navbar_shadow block text-sm font-medium py-6 transition duration-150 hover:text-gray-300" : "hidden"}`}
                />
                <LinkItems
                    to={"/about"}
                    title={"درباره ما"}
                    className={`${isMenuOpen ? "navbar_shadow block text-sm font-medium py-6 transition duration-200 hover:text-gray-300" : "hidden"}`}
                />
                <LinkItems
                    to={"/blog"}
                    title={"بلاگ"}
                    className={`${isMenuOpen ? "navbar_shadow block text-sm font-medium py-6 transition duration-300 hover:text-gray-300" : "hidden"}`}
                />
                <LinkItems
                    to={"/contact"}
                    title={"تماس با ما"}
                    className={`${isMenuOpen ? "navbar_shadow block text-sm font-medium py-6 transition duration-700 hover:text-gray-300" : "hidden"}`}
                />
            </ul>
        </>
    )
}

export default MobilePageLink
