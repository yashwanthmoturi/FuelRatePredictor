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
                        <select type='text' value={state} onChange={e=>setState(e.target.value)} required>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
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