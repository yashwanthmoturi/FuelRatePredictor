import React, { useState } from 'react';
import './FuelRateQuoter.css';
import { useNavigate } from "react-router-dom"
import Header from './Header';
import Footer from './Footer';

const FuelRateQuoter = () => {
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home')
        // Here you can perform your login logic, such as sending the email and password to a server
        console.log('Email:', username);
    };

    return (
        <div>
            <Header isLoggedIn={true}/>
            <br />
            <div id="page-center">
            <center><h2 className='f-h2'>Fuel Quote Estimator</h2></center>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div>

                        Delivery Address :
                        <input className="f-input" type="text" value="8181 Fannin st" id="add-inp" disabled />

                    </div>
                    <br />
                    <div id="ip-container">

                        <div>
                            Gallons Requested: &nbsp;
                            <input className="f-input" type="numeric" step="any" minLength="1" maxLength="10" required id="gallons_inp_fld" value={username} onChange={handleUsernameChange} />
                        </div>
                        <div className='delivery-date'>
                            Delivery Date: &nbsp;
                        
                        <input className="f-input" type="date" />
                    </div>
                    </div>
                    <br />
                    <div>
                        Suggested Price:
                        <input className="f-input" type="number" placeholder="$ 0.00" disabled />
                    </div>
                    <br />
                    <div>
                        Total Amount Due:
                        <input className="f-input" type="number" placeholder="$ 0.00" disabled />
                    </div>
                    <br />
                    <button className="f-button" type="submit">Get Quote</button>
                </form>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default FuelRateQuoter;