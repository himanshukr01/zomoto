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
      <div>
        <div>
          <img  style={{ width: '30%', position: 'fixed', top: 150, left: 20, zIndex: 1000 }} src="burger.jpg" alt="" />
          <h2 style={{ width: '30%', position: 'fixed', top: 450, left: 150, zIndex: 1000 }} >Burger</h2>
        </div>
        <div>
          <img style={{ width: '30%', position: 'fixed', top: 150, left: 500, zIndex: 1000 }} src="noodles.jpg" alt="" />
          <h2 style={{ width: '30%', position: 'fixed', top: 450, left: 650, zIndex: 1000 }} >Noodles</h2>
        </div><div>
          <img style={{ width: '30%', position: 'fixed', top: 150, left: 980, zIndex: 1000 }} src="pizza.jpg" alt="" />
          <h2 style={{ width: '30%', position: 'fixed', top: 450, left: 1150, zIndex: 1000 }} >Pizza</h2>
        </div><div>
          <img style={{ width: '30%', position: 'fixed', top: 150, left: 1460, zIndex: 1000 }} src="wine.jpg" alt="" />
          <h2 style={{ width: '30%', position: 'fixed', top: 450, left: 1650, zIndex: 1000 }} >Grapes Wine</h2>
        </div>
      </div>
      <button style={{ width: '10%', position: 'fixed', top: 60, left: 1220, zIndex: 1000 }} onClick={() => {
        localStorage.removeItem('username');
        navigate('/login');
      }}>Login</button>

    </div>
  )
}

export default Home