import { useState } from "react";
import AuthContext from "../context/AuthContext"



const AuthProvider = ({ children }) => {

    const isSessionLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    const isUserDataInSession = sessionStorage.getItem("user");

    const [isLoggedIn, setIsLoggedIn] = useState(isSessionLoggedIn);
    const [user, setUser] = useState(isUserDataInSession ? JSON.parse(isUserDataInSession) : null);



    const setIsLoggedInWithSession = (value, userData) => {
        sessionStorage.setItem("isLoggedIn", value);
        sessionStorage.setItem("user", JSON.stringify(userData));
        setIsLoggedIn(value);
        setUser(userData);
    }

    const logout = () => {
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("user");
        setIsLoggedIn(false);
        setUser(null);
    }


    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedInWithSession, user, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
