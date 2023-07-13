import React from 'react';
import './Home.css';
import Header from './Header';
import Footer from './Footer';
 
const Home = () => {
    return (
    <div>

        <Header isLoggedIn={true}/>
        <div className='Home-container'>

            <div className='fuel-rate'>
                <div className="Home-center">
                    <h2 className='Home-heading'> Predict your fuel rate</h2>
                    <button id='b1'>Fuel rate</button>
                </div>
            </div>
            <div className='fuel-history'>
                <div className="Home-center">
                    <h2 className='Home-heading'>Check your fuel history</h2>
                    <button id='b2'>Fuel history</button>
                </div>
            </div>

        </div>
        <Footer />

    </div>
    );
};
 
export default Home;