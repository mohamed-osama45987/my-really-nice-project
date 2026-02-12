import { useState, useEffect, useCallback } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  const [imgUrl, setImgUrl] = useState("");


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
    <>
      <div>
        {imgUrl && <img src={imgUrl} alt="Random Dog" />}
      </div>
      <h1>Cute dog</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
