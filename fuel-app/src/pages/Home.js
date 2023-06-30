import React from 'react';
import './Home.css';
import Header from './Header';
import Footer from './Footer';
 
const Home = () => {
    return (
    <div>

        <Header />
        <div className='container'>

            <div className='fuel-rate'>
                <h2 className='heading'> Predict your fuel rate</h2>
                <div className="center">
                    <button id='b1'>Fuel rate</button>
                </div>
            </div>
            <div className='fuel-history'>
                <h2 className='heading'>Check your fuel history</h2>
                <div className="center">
                    <button id='b2'>Fuel history</button>
                </div>
            </div>

        </div>
        <Footer />

    </div>
    );
};
 
export default Home;