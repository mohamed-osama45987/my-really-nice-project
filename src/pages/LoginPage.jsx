import { useContext } from "react";
import AuthContext from "../context/AuthContext"
import { Navigate, NavLink, useNavigate } from "react-router";
import { routes } from "../constants";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../DB/Firebase";


const LoginPage = () => {
    const { isLoggedIn, setIsLoggedInWithSession } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setIsLoggedInWithSession(true, userCredential);
            navigate(routes.Home);
        } catch (error) {
            console.error("Error logging in: ", error);
            alert("Error logging in. Please try again.")
        }
    }

    return (
        isLoggedIn ? <Navigate to={routes.Home} /> : (
            <form onSubmit={handleSubmit} >
                <NavBar />
                <div className=" flex flex-col gap-5 items-start">

                    <h1>Login Page</h1>

                    <div className="flex flex-col gap-2 justify-center items-end">
                        <div className="flex gap-2">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" className="bg-white rounded-md text-black" onChange={(e) => setEmail(e.target.value)} value={email} />
                            <br />
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" className="bg-white rounded-md text-black " onChange={(e) => setPassword(e.target.value)} value={password} />
                            <br />
                        </div>
                    </div>


                    <button className="bg-blue-500 text-white rounded-md px-4 py-2 self-center">Login</button>

                    <span>Don't have an account? <NavLink to={routes.SignUp} className="text-blue-500">Sign Up</NavLink></span>
                </div>

            </form >
        )
    )
}

export default LoginPage