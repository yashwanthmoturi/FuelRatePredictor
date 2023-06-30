import React, { useState } from 'react';
import './Login.css';
import {useNavigate} from "react-router-dom"
import Header from './Header';
import Footer from './Footer';

const Login = () => {

  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  const navigate = useNavigate();
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [isSignUp, signUpIsClicked] = useState(false);
  const [isForget, setIsForget] = useState(false);

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

  function handleLogin(e){
        e.preventDefault();
        navigate('/client-profile')

      console.log("hello");
  }


  return(
    <div >
      <Header />
      {
        (isSignUp)? (
                    <div class="signup-container">
                      <div class="container">
                        <div class="login">
                          <form action="#">
                            <h1 className='l-h1'>Register</h1>
                            <input className="l-input" type="email" minlength="5" maxlength="50" placeholder="Email" />
                            <input className="l-input" type="password" minlength="5" maxlength="20" placeholder="Password" />
                            <button className="l-button" onclick="#">Signup</button>
                          </form>
                        </div>
                        <div class="signup">
                              <h1 className='l-h1'>Already a USER!</h1>
                              <p className='l-p'>Login here</p>
                              <button className="l-button" onClick={tempLogin}>Login</button>
                        </div>
                      </div>
                    </div>
        )
        :((!isForget)?
                    <div class="login-container">
                      <div class="container">
                        <div class="login">
                          <form action="#">
                            <h1 className='l-h1'>Login</h1>
                            <input className="l-input" type="email" minlength="5" maxlength="50" placeholder="Email" />
                            <input className="l-input" type="password" minlength="5" maxlength="20" placeholder="Password" />
                            <a className="l-text" onClick={()=>{setIsForget(true)}} href="/#">Forgot your password?</a>
                            <button className="l-button" onClick={handleLogin}>Login</button>
                          </form>
                        </div>
                        <div class="signup">
                              <h1 className='l-h1'>NEW USER!</h1>
                              <p className='l-p'>Use your personal details to create a new profile</p>
                              <button className="l-button" onClick={handleSignUp}>Sign Up</button>
                        </div>
                      </div>
                    </div>
                    :
                    <div class="login-container">
                      <div class="container">
                        <div class="login">
                          <form action="#">
                            <h1 className='l-h1'>Forgot Password</h1>
                            <input className="l-input" type="email" minlength="5" maxlength="50" placeholder="Email" />
                            <br></br>
                            <button className="l-button" onClick={handleLogin}>Get Code</button>
                            <a className="l-text" onClick={()=>{setIsForget(false)}} href="/#">Back to Login</a>
                          </form>
                        </div>
                        <div class="signup">
                              <h1 className='l-h1'>NEW USER!</h1>
                              <p className='l-p'>Use your personal details to create a new profile</p>
                              <button className="l-button" onClick={handleSignUp}>Sign Up</button>
                        </div>
                      </div>
                    </div>
        )
      }
      <Footer />
    </div>
  );




};

export default Login;