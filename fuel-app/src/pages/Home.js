import React from 'react';
import './Home.css';
import Header from './Header';
import Footer from './Footer';
import {useNavigate} from "react-router-dom"

 
const Home = () => {
  const navigate = useNavigate();

    return (
    <div>

        <Header isLoggedIn={true}/>
        <div className='Home-container'>

            <div className='fuel-rate'>
                <div className="Home-center">
                    <h2 className='Home-heading'> Predict your fuel rate</h2>
                    <button onClick={()=>navigate('/fuel-rate-quoter')} id='b1'>Fuel rate</button>
                </div>
            </div>
            <div className='fuel-history'>
                <div className="Home-center">
                    <h2 className='Home-heading'>Check your fuel history</h2>
                    <button onClick={()=>navigate('/display')} id='b2'>Fuel history</button>
                </div>
            </div>

        </div>
        <Footer />

    </div>
    );
};
 
export default Home;