
import { Navigate } from "react-router";
import { routes } from "../constants";
import { useContext } from "react";
import AuthContext from "../context/AuthContext"


const LoggedInRoute = ({ children }) => {

    const { isLoggedIn } = useContext(AuthContext);

    return (
        isLoggedIn ? children : <Navigate to={routes.Login} />
    )
}

export default LoggedInRoute