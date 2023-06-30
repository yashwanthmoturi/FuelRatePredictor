import React from 'react';
import './ClientProfile.css'; 
import Header from './Header';
import Footer from './Footer';

const ClientProfile = () => {
    return (
    <div>
      
        <Header />
        <div className='profile-container'>
            <div className='profile'>
                <h2>Complete your profile</h2>
                <form className='form'>
                    <div className='username'>
                        <input type='text' placeholder='FirstName' />
                        <input type='text' placeholder='LastName' />
                    </div>
                    <div className='address'>
                        <input type='text' placeholder='Address 1'/>
                        <input type='text' placeholder='Address 2'/>
                    </div>
                    <div className='location'>
                        <input type='text' placeholder='City'/>
                        <input type='text' placeholder='State'/>
                        <input type='number' placeholder='Zipcode'/>
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