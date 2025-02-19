import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../App.css";

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
    <div className='container'> {/* Ensure className is used */}
      <h2>Login</h2>
      <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
