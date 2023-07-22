import React, {useState} from 'react';
import './ClientProfile.css'; 
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import {useNavigate} from "react-router-dom"


const ClientProfile = () => {

    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/clientProfile`, {
          email: sessionStorage.getItem("email"),
          firstname: firstname,
          lastname: lastname,
          address1: address1,
          address2: address2,
          city: city,
          zipcode: zipcode,
          state: state
        }, {mode:'cors'}).then((response)=>{
            navigate('/fuel-rate-quoter')
            console.log(response.data);
          
        }).catch(error => {
          console.log(error);
        });
    }
    return (
    <div>
      
      <Header isLoggedIn={true}/>
        <div className='profile-container'>
            <div className='profile'>
                <h2 className='c-h2'>Complete your profile</h2>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='username'>
                        <input type='text' value={firstname} onChange={e=>setFirstname(e.target.value)} placeholder='FirstName' minLength="1" maxLength="50" required/>
                        <input type='text' value={lastname} onChange={e=>setLastname(e.target.value)} placeholder='LastName' minLength="1" maxLength="50" required/>
                    </div>
                    <div className='address'>
                        <input type='text' value={address1} onChange={e=>setAddress1(e.target.value)} placeholder='Address 1' minLength="1" maxLength="100" required/>
                        <input type='text' value={address2} onChange={e=>setAddress2(e.target.value)} placeholder='Address 2 (Optional)' minLength="0" maxLength="100"/>
                    </div>
                    <div className='location'>
                        <input type='text' value={city} onChange={e=>setCity(e.target.value)} placeholder='City' minLength="1" maxLength="100" required/>
                        <input type='text' value={state} onChange={e=>setState(e.target.value)} placeholder='State' minLength="2" maxLength="2" required/>
                        <input type='number' value={zipcode} onChange={e=>setZipcode(e.target.value)} placeholder='Zipcode' minLength="5" maxLength="9" required/>
                    </div>
                    <input type='submit' id="submit"/>
                </form>
            </div>
        </div>
        <Footer />

      
    </div>
    );
};
 
export default ClientProfile;