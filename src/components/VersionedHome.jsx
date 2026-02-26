import { useCallback, useState, useEffect, useReducer, } from 'react'
import axios from 'axios'
import { routes } from '../constants'
import { useParams, useNavigate } from 'react-router'


const Params = {
    search: "search"
}


const intialState = {
    count: 0,
}


const reducer = (state, action) => {

    if (action.type === "increment") {
        return { ...state, count: state.count + 1 }
    }

    if (action.type === "decrement") {
        return { ...state, count: state.count - 1 }
    }

}







const VersionedHome = () => {


    const params = useParams();
    const navigate = useNavigate();

    const [imgUrl, setImgUrl] = useState("");

    const [state, dispatch] = useReducer(reducer, intialState)








    const fetchDogImage = useCallback(async () => {
        try {
            const response = await axios.get("https://dog.ceo/api/breeds/image/random");
            setImgUrl(response.data.message);
        } catch (error) {
            console.error("Error fetching dog image:", error);
        }
    }, [])


    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchDogImage();
    }, [])
    return (
        <div>
            <h1>Version: {params.version}</h1>
            <div>
                {imgUrl && <img src={imgUrl} alt="Random Dog" />}
            </div>
            <h1>Cute dog</h1>
            <div className="card">
                <button onClick={() => dispatch({ type: "increment" })}>
                    count is {state.count}
                </button>


                <button onClick={() => navigate(routes.VersionedHome.replace(":version", "v1.0.2"))}>
                    Go to version 1.0.2
                </button>



                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default VersionedHome