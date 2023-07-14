import React, { useEffect, useState } from 'react';
import './FuelRateQuoter.css';
import { useNavigate } from "react-router-dom"
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

const FuelRateQuoter = () => {
    const handleGallonsChange = (e) => {
        setGallons(e.target.value);
    };
    useEffect(()=>{
        axios.get(`http://localhost:3001/getUserDetails?email=${sessionStorage.getItem("email")}`, {mode:'cors'}).then((response)=>{
          console.log(response.data);
          const {address1, address2, state, city, zipcode} = response.data;
          setAddress(`${address1}, ${address2&&address2}, ${city}, ${state}, ${zipcode}`)
        }).catch(error => {
          console.log(error);
        });
    },[]);

    const navigate = useNavigate();
    const [gallons, setGallons] = useState('');
    const [date, setDate] = useState();
    const [suggestedPrice, setSuggestedPrice] = useState("0.00");
    const [totalAmount, setTotalAmount] = useState("0.00");
    const [submitQuote, setSubmitQuote] = useState(false);
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuggestedPrice(3.19);
        setTotalAmount(3.19*gallons);
        setSubmitQuote(true);
        // navigate('/home')
        // Here you can perform your login logic, such as sending the email and password to a server
        // console.log('Email:', username);
    };

    const handleSubmitQuote = (e) => {
        e.preventDefault();
        // navigate('/home');
        axios.post(`http://localhost:3001/submitQuote`, {
            email: sessionStorage.getItem("email"), gallons_requested: gallons, delivery_date: date, delivery_address: address, suggested_price_per_gallon: suggestedPrice, total_amount_due: totalAmount 
        }, {mode:'cors'}).then((response)=>{
            navigate('/home')
            console.log(response.data);
        }).catch(error => {
          console.log(error);
        });
    };

    return (
        <div>
            <Header isLoggedIn={true}/>
            <br />
            <div id="page-center">
            <center><h2 className='f-h2'>Fuel Quote Estimator</h2></center>
            <div className="form-container">
                <form>
                    <div>

                        Delivery Address :
                        <input className="f-input" type="text" value={address} id="add-inp" disabled />

                    </div>
                    <br />
                    <div id="ip-container">

                        <div>
                            Gallons Requested: &nbsp;
                            <input className="f-input" type="numeric" step="any" minLength="1" maxLength="10" required id="gallons_inp_fld" value={gallons} onChange={handleGallonsChange} />
                        </div>
                        <div className='delivery-date'>
                            Delivery Date: &nbsp;
                        
                        <input className="f-input" value={date} onChange={e=>setDate(e.target.value)} type="date" required/>
                    </div>
                    </div>
                    <br />
                    <div>
                        Suggested Price:
                        <input className="f-input" type="number" value={suggestedPrice}  disabled />
                    </div>
                    <br />
                    <div>
                        Total Amount Due:
                        <input className="f-input" type="number" value={totalAmount} disabled />
                    </div>
                    <br />
                    <button onClick={handleSubmit} className="f-button" type="submit">Get Quote</button>
                    <br></br>
                    <br></br>
                    {submitQuote&& <button onClick={handleSubmitQuote} className="f-button" type="submit">Submit Quote</button>}
                </form>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default FuelRateQuoter;