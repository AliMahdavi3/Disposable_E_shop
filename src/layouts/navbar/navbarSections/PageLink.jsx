import React from 'react'
import { NavLink } from 'react-router-dom'

const PageLink = () => {

    const LinkItems = ({ to, title }) => {
        return (
            <li>
                <NavLink
                    to={to}
                    className="navbar_shadow ml-6 font-semibold hover:text-gray-200"
                >
                    {title}
                </NavLink>
            </li>
        )
    }

    return (
        <ul className='hidden md:flex md:flex-grow md:justify-center text-white'>
            <LinkItems to={"/"} title={"خانه"} />
            <LinkItems to={"/products"} title={"محصولات"} />
            <LinkItems to={"/about"} title={"درباره ما"} />
            <LinkItems to={"/blog"} title={"بلاگ"} />
            <LinkItems to={"/contact"} title={"تماس با ما"} />
        </ul>
    )
}

export default PageLink
