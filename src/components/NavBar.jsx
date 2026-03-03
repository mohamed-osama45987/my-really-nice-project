

import { NavLink } from "react-router";
import { routes } from '../constants'

const NavBar = () => {
    return (
        <nav className="bg-gray-300 text-white p-4 flex space-x-8 absolute top-0 left-0 w-full">
            <NavLink to={routes.Home} >
                Home
            </NavLink>
            <NavLink to={routes.About} >
                About
            </NavLink>
            <NavLink to={routes.Contact} >
                Contact
            </NavLink>
        </nav>
    )
}

export default NavBar