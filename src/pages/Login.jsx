import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import Navbar from '../components/Navbar';

const Login = ({ setIsLoggedIn }) => { // Fix the prop destructuring
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });
      localStorage.setItem('username', res.data.username);
      setIsLoggedIn(true);
      navigate('/home');
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  const returnToLogin = () => {
    navigate('/register');
  };

  return (

    <div className='container'>
      <Navbar />
      <h2>Login</h2>
      <div style={{gap: '1rem'}}>

        <input class='text-bg-warning border' type="email" placeholder='Email' style={{ width: '100%' }} onChange={(e) => setEmail(e.target.value)} />
        <input class='text-bg-warning border' type="password" placeholder='Password' style={{ width: '100%' }} onChange={(e) => setPassword(e.target.value)} />
        <button class='text-bg-success border' style={{ width: '100%' }} onClick={handleLogin}>Login</button>
        <button class='text-bg-success border' style={{ width: '100%' }} onClick={returnToLogin} >Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
