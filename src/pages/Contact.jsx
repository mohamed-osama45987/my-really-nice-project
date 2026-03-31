import NavBar from "../components/NavBar"
import { useEffect, useState } from "react"
import { database } from "../DB/Firebase"
import { ref, set, onValue } from "firebase/database";


const usersDbRef = (userId) => userId ? ref(database, 'users/' + userId) : ref(database, 'users/');


function writeUserData(userId, name, email) {
    set(usersDbRef(userId), {
        username: name,
        email: email,
    });
}



const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [users, setUsers] = useState([])

    useEffect(() => {
        onValue(usersDbRef(), (snapshot) => {
            const data = snapshot.val();
            setUsers(JSON.parse(JSON.stringify(data)));
        });
    }, []);


    const handleSubmit = (e) => {
        try {
            e.preventDefault()
            writeUserData(Date.now(), name, email)
            setName("")
            setEmail("")
            alert("Data saved successfully!")
        } catch (error) {
            console.error("Error submitting form: ", error)
            alert("Error saving data. Please try again.")
        }
    }






    return (
        <form onSubmit={handleSubmit} >
            <NavBar />
            <div className=" flex flex-col gap-5 items-start">

                <h1>Contact Page</h1>

                <div className="flex flex-col gap-2 justify-center items-end">
                    <div className="flex gap-2">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" className="bg-white rounded-md text-black " onChange={(e) => setName(e.target.value)} value={name} />
                        <br />
                    </div>

                    <div className="flex gap-2">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" className="bg-white rounded-md text-black" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <br />
                    </div>
                </div>


                <button className="bg-blue-500 text-white rounded-md px-4 py-2 self-center">Submit</button>

            </div>

            {
                users && Object.entries(users).map(([id, user]) => (
                    <div key={id} className="bg-gray-200 rounded-md p-4 mt-4 text-black">
                        <p><strong>Name:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                ))
            }


        </form>
    )
}

export default Contact