import React, { useState } from 'react';
import './Login.css';
import {useNavigate} from "react-router-dom"
import Header from './Header';
import Footer from './Footer';

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
  const [isSignUp, signUpIsClicked] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate('/home')
  //   // Here you can perform your login logic, such as sending the email and password to a server
  //   console.log('Email:', username);
  //   console.log('Password:', password);
  // };

  const handleSignUp = (e) => {

    signUpIsClicked(true);

  }

  function tempLogin(){
    signUpIsClicked(false);
  }


  return(
    <div >
      <Header />
      {
        (isSignUp)? 
                    <div class="signup-container">
                      <div class="container">
                        <div class="login">
                          <form action="#">
                            <h1>Register</h1>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button onclick="#">Signup</button>
                          </form>
                        </div>
                        <div class="signup">
                              <h1>Already a USER!</h1>
                              <p>Login here</p>
                              <button id="signUp" onClick={tempLogin}>Login</button>
                        </div>
                      </div>
                    </div>
        :
                    <div class="login-container">
                      <div class="container">
                        <div class="login">
                          <form action="#">
                            <h1>Login</h1>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button onclick="#">Login</button>
                          </form>
                        </div>
                        <div class="signup">
                              <h1>NEW USER!</h1>
                              <p>Use your personal details to create a new profile</p>
                              <button id="signUp" onClick={handleSignUp}>Sign Up</button>
                        </div>
                      </div>
                    </div>
      }
      <Footer />
    </div>
  );




};

export default Login;