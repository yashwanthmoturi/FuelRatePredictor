import React from 'react';
import './ClientProfile.css'; 
import Header from './Header';
import Footer from './Footer';

const ClientProfile = () => {
    return (
    <div>
      
      <Header isLoggedIn={true}/>
        <div className='profile-container'>
            <div className='profile'>
                <h2 className='c-h2'>Complete your profile</h2>
                <form className='form'>
                    <div className='username'>
                        <input type='text' placeholder='FirstName' minLength="1" maxLength="50" required/>
                        <input type='text' placeholder='LastName' minLength="1" maxLength="50" required/>
                    </div>
                    <div className='address'>
                        <input type='text' placeholder='Address 1' minLength="1" maxLength="100" required/>
                        <input type='text' placeholder='Address 2 (Optional)' minLength="0" maxLength="100"/>
                    </div>
                    <div className='location'>
                        <input type='text' placeholder='City' minLength="1" maxLength="100" required/>
                        <input type='text' placeholder='State' minLength="2" maxLength="2" required/>
                        <input type='number' placeholder='Zipcode' minLength="5" maxLength="9" required/>
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