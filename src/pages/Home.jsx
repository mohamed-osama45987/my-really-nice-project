import NavBar from "../components/NavBar"
import { Outlet } from "react-router";
import LoggedInRoute from "../components/LogginRoute";
import { useLocation } from "react-router";



const Layout = () => {

    const location = useLocation();

    return (
        <div>
            <NavBar />
            <div>
                {location.pathname.includes("login") || location.pathname.includes("signup") ? <Outlet /> :
                    <LoggedInRoute>
                        <Outlet />
                    </LoggedInRoute>}
            </div>
        </div>
    )
}

export default Layout