import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";

const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    await axios.post("http://localhost:5000/register", { username, email, password });
    localStorage.setItem("username", username);
    setIsLoggedIn(true);
    navigate("/home");
  };

  return (
    <div className="container">
      <Navbar />
      <h2>Register</h2>
      <input
        class='text-bg-warning'
        style={{ width: '100%' }}
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        class='text-bg-warning'
        style={{ width: '100%' }}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        class='text-bg-warning'
        style={{ width: '100%' }}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button class='text-bg-success' onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register