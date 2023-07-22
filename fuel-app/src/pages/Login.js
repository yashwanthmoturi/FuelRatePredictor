import React, { useState } from 'react';
import axios from 'axios';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remail, setREmail] = useState('');
  const [rpassword, setRPassword] = useState('');
  const [isSignUp, signUpIsClicked] = useState(false);
  const [isForget, setIsForget] = useState(false);
  const [isCodePage, setIsCodePage] = useState(false);
  const [isPasswordPage, setIsPasswordPage] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState();
  const [newPassword, setNewPassword] = useState('');
  const [newVerifyPassword, setNewVerifyPassword] = useState('');

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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleREmailChange = (e) => {
    setREmail(e.target.value);
  }

  const handleRPasswordChange = (e) => {
    setRPassword(e.target.value);
  }
  
  const refresh = () => window.location.reload(true);


  function tempLogin(){
    signUpIsClicked(false);
  }

  const handleLogin = async(e) => {
        e.preventDefault();
        
        axios.post(`http://localhost:3001/login`, {
          email: email,
          password: password 
        }, {mode:'cors'}).then((response)=>{
          sessionStorage.setItem("email", email);
          if(response.data['message'] === "ClientProfilePending") {
            navigate('/client-profile')
          }
          else {
            navigate('/fuel-rate-quoter')
          }
            console.log(response.data);
          
        }).catch(error => {
          console.log(error);
        });

      console.log("hello");
  }

  const handleRegister = async(e) => {
    e.preventDefault();
    
    axios.post(`http://localhost:3001/register`, {
      email: remail,
      password: rpassword 
    }, {mode:'cors'}).then((response)=>{
        refresh();
        console.log(response.data);
      
    }).catch(error => {
      console.log(error);
    });

  console.log("hello");
}

  const handleForgot = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/forgot`, {
      email: forgotEmail
    }, {mode:'cors'}).then((response)=>{
        setIsCodePage(true);
        console.log(response.data);
      
    }).catch(error => {
      console.log(error);
    });
  }

  const handleVerifyCode = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/verify`, {
      code: verificationCode,
      email: forgotEmail
    }, {mode:'cors'}).then((response)=>{
        console.log(response.data);
        setIsPasswordPage(true);

    }).catch(error => {
      console.log(error);
    });
  }

  const handleNewPassword = (e) => {
    e.preventDefault();
    if(newPassword === newVerifyPassword) {
      axios.post(`http://localhost:3001/updatePassword`, {
        password: newPassword,
        email: forgotEmail
      }, {mode:'cors'}).then((response)=>{
          console.log(response.data);
          refresh();

      }).catch(error => {
        console.log(error);
      });
    }
  }

  return(
    <div >
      <Header />
      {
        (isSignUp)? (
                    <div className="signup-container">
                      <div className="container">
                        <div className="login">
                          <form onSubmit={handleRegister}>
                            <h1 className='l-h1'>Register</h1>
                            <input className="l-input" onChange={handleREmailChange} type="email" value={remail} minLength="5" maxLength="50" placeholder="Email" required/>
                            <input className="l-input" onChange={handleRPasswordChange} type="password" value={rpassword} minLength="7" maxLength="20" placeholder="Password" required/>
                            <br></br>
                            <button type="submit" className="l-button">Signup</button>
                          </form>
                        </div>
                        <div className="signup">
                              <h1 className='l-h1'>Already a USER!</h1>
                              <p className='l-p'>Login here</p>
                              <button className="l-button" onClick={tempLogin}>Login</button>
                        </div>
                      </div>
                    </div>
        )
        :((!isForget)?
                    <div className="login-container">
                      <div className="container">
                        <div className="login">
                          <form onSubmit={handleLogin}>
                            <h1 className='l-h1'>Login</h1>
                            <input className="l-input" onChange={handleEmailChange} type="email" value={email} minLength="5" maxLength="50" placeholder="Email" required/>
                            <input className="l-input" onChange={handlePasswordChange} type="password" value={password} minLength="7" maxLength="20" placeholder="Password" required/>
                            <p className="l-text" onClick={()=>{setIsForget(true)}}>Forgot your password?</p>
                            <button type="submit" className="l-button" >Login</button>
                          </form>
                        </div>
                        <div className="signup">
                              <h1 className='l-h1'>NEW USER!</h1>
                              <p className='l-p'>Use your personal details to create a new profile</p>
                              <button className="l-button" onClick={handleSignUp}>Sign Up</button>
                        </div>
                      </div>
                    </div>
                    :
                    (!isCodePage)?(<div className="login-container">
                      <div className="container">
                        <div className="login">
                          <form onSubmit={handleForgot}>
                            <h1 className='l-h1'>Forgot Password</h1>
                            <input className="l-input" value={forgotEmail} onChange={(e)=>{setForgotEmail(e.target.value)}} type="email" minLength="5" maxLength="50" placeholder="Email" required/>
                            <br></br>
                            <button type="submit" className="l-button">Get Code</button>
                            <a className="l-text" onClick={()=>{setIsForget(false);refresh();}} href="/#">Back to Login</a>
                          </form>
                        </div>
                        <div className="signup">
                              <h1 className='l-h1'>NEW USER!</h1>
                              <p className='l-p'>Use your personal details to create a new profile</p>
                              <button className="l-button" onClick={handleSignUp}>Sign Up</button>
                        </div>
                      </div>
                    </div>)
                    :
                    (!isPasswordPage)?(<div className="login-container">
                    <div className="container">
                      <div className="login">
                        <form onSubmit={handleVerifyCode}>
                          <h1 className='l-h1'>Verify Code</h1>
                          <input className="l-input" type="number" value={verificationCode} onChange={e=>setVerificationCode(e.target.value)} min={0} max={99999} placeholder="Verification Code" required/>
                          <br></br>
                          <button type="submit" className="l-button">Verify</button>
                          <a className="l-text" onClick={()=>{setIsForget(false);refresh();}} href="/#">Back to Login</a>
                        </form>
                      </div>
                      <div className="signup">
                            <h1 className='l-h1'>NEW USER!</h1>
                            <p className='l-p'>Use your personal details to create a new profile</p>
                            <button className="l-button" onClick={handleSignUp}>Sign Up</button>
                      </div>
                    </div>
                  </div>)
                  :
                  (<div className="login-container">
                      <div className="container">
                        <div className="login">
                          <form onSubmit={handleNewPassword}>
                            <h2 className='l-h1'>Create New Password</h2>
                            <input className="l-input" type="password" value={newPassword} onChange={e=>setNewPassword(e.target.value)} minLength="7" maxLength="50" placeholder="New Password" required/>
                            <input className="l-input" type="password" value={newVerifyPassword} onChange={e=>setNewVerifyPassword(e.target.value)} minLength="7" maxLength="50" placeholder="Re-enter New Password" required/>
                            <br></br>
                            <button className="l-button" type='submit'>Change Password</button>
                            <a className="l-text" onClick={()=>{setIsForget(false);refresh();}} href="/#">Back to Login</a>
                          </form>
                        </div>
                        <div className="signup">
                              <h1 className='l-h1'>NEW USER!</h1>
                              <p className='l-p'>Use your personal details to create a new profile</p>
                              <button className="l-button" onClick={handleSignUp}>Sign Up</button>
                        </div>
                      </div>
                    </div>)
            
        )
      }
      <Footer />
    </div>
  );




};

export default Login;