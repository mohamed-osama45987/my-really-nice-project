import { useState } from "react";
import AuthContext from "../context/AuthContext"



const AuthProvider = ({ children }) => {

    const isSessionLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

    const [isLoggedIn, setIsLoggedIn] = useState(isSessionLoggedIn);


    const setIsLoggedInWithSession = (value) => {
        sessionStorage.setItem("isLoggedIn", value);
        setIsLoggedIn(value);
    }


    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedInWithSession }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
