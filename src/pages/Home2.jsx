import React from 'react'
import Navbar from '../components/Navbar'

const Home2 = () => {
  return (
    <div>
    <Navbar />
    <div>
        
        <img style={{width: '30%', position: 'fixed', top: 80, left:20, zIndex: 1000}} src="burger.jpg" alt="" />
        <h2 style={{width: '30%', position: 'fixed', top: 350, left:140, zIndex: 1000}} >Burger</h2>
    </div>
    </div>
  )
}

export default Home2