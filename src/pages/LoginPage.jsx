import { useContext } from "react";
import AuthContext from "../context/AuthContext"
import { Navigate } from "react-router";
import { routes } from "../constants";


const LoginPage = () => {
    const { isLoggedIn, setIsLoggedInWithSession } = useContext(AuthContext);
    return (
        isLoggedIn ? <Navigate to={routes.Home} /> : (
            <div className="h-screen flex items-center justify-center">
                <button onClick={() => setIsLoggedInWithSession(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Login
                </button>
            </div>
        )
    )
}

export default LoginPage