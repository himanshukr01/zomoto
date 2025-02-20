import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";


const Home = () => {

  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('username');

   
   
  })

  return (
    <div className="container">
      <Navbar />
      <a href="/Home2" >Welcome to ZOMOTO!</a>
      <button style={{width: '10%', position: 'fixed', top: 60, left:1220, zIndex: 1000}} onClick={() => {
        localStorage.removeItem('username');
        navigate('/login');
      }}>Logout</button>
    </div>
  )
}

export default Home