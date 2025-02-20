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

  return (

    <div className='container'>
      <Navbar />
      <h2>Login</h2>
      <div style={{gap: '1rem'}}>

        <input class='text-bg-warning' type="email" placeholder='Email' style={{ width: '100%' }} onChange={(e) => setEmail(e.target.value)} />
        <input class='text-bg-warning' type="password" placeholder='Password' style={{ width: '100%' }} onChange={(e) => setPassword(e.target.value)} />
        <button class='text-bg-success' style={{ width: '100%' }} onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
