import { useContext } from "react";
import AuthContext from "../context/AuthContext"
import { Navigate, useNavigate } from "react-router";
import { routes } from "../constants";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../DB/Firebase";


const SignUpPage = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await createUserWithEmailAndPassword(auth, email, password);
            navigate(routes.Login);
        } catch (error) {
            console.error("Error signing up: ", error);
            alert("Error signing up. Please try again.")
        }
    }


    return (
        isLoggedIn ? <Navigate to={routes.Home} /> : (
            <form onSubmit={handleSubmit} >
                <NavBar />
                <div className=" flex flex-col gap-5 items-start">

                    <h1>Signup Page</h1>

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


                    <button className="bg-blue-500 text-white rounded-md px-4 py-2 self-center">SignUp</button>

                </div>




            </form>
        )
    )
}

export default SignUpPage