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
                <h2>Complete your profile</h2>
                <form className='form'>
                    <div className='username'>
                        <input type='text' placeholder='FirstName' minlength="1" maxlength="50" required/>
                        <input type='text' placeholder='LastName' minlength="1" maxlength="50" required/>
                    </div>
                    <div className='address'>
                        <input type='text' placeholder='Address 1' minlength="1" maxlength="100" required/>
                        <input type='text' placeholder='Address 2 (Optional)' minlength="0" maxlength="100"/>
                    </div>
                    <div className='location'>
                        <input type='text' placeholder='City' minlength="1" maxlength="100" required/>
                        <input type='text' placeholder='State' minlength="2" maxlength="2" required/>
                        <input type='number' placeholder='Zipcode' minlength="5" maxlength="9" required/>
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