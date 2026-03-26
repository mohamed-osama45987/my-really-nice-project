

import { NavLink } from "react-router";
import { routes } from '../constants'
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);
    return (
        <nav className="bg-gray-300 text-white p-4 flex absolute top-0 left-0 w-full justify-between items-center">
            <div className="flex space-x-8">
                <NavLink to={routes.Home} >
                    Home
                </NavLink>
                <NavLink to={routes.About} >
                    About
                </NavLink>
                <NavLink to={routes.Contact} >
                    Contact
                </NavLink>
            </div>

            {isLoggedIn ? (
                <button className="bg-blue-500 text-white rounded-md px-4 py-2" onClick={logout}>
                    Logout
                </button>
            ) : (
                <button className=" bg-blue-500 text-white rounded-md px-4 py-2">
                    <NavLink to={routes.Login} >
                        Login
                    </NavLink>
                </button>

            )
            }

        </nav >
    )
}

export default NavBar