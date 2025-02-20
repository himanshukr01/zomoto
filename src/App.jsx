import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Home from './pages/Home'
import './App.css'
import Home2 from './pages/Home2'

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/home2" element={<Home2 />} />

      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App