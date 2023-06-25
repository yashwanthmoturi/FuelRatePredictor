import React, { useState } from 'react';
import './Login.css';
import {useNavigate} from "react-router-dom"


const Login = () => {

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home')
    // Here you can perform your login logic, such as sending the email and password to a server
    console.log('Email:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <br />
        <div>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <br />
        <div>
          
          <a href="forgot">Forgot Password</a>
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;