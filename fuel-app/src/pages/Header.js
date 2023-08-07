import React from 'react';
import './Header.css';

const Header = (param) => {
    const isLoggedIn = param.isLoggedIn;
    const handleLogOut = () => {
        sessionStorage.clear();
    }
    return (
    <div className="nav-container">
        
        <div className="div1">
          <a className="a-font" href='home'><strong>FRP</strong></a>
        </div>
      
        <div className="div2">
            <ul>
                <li className="hover1"><a href='home' >Home</a></li>
                <li id='dropdown' >
                    <div>Services</div>
                    <div className='dropdown-content'>
                        <a href='fuel-rate-quoter'>Fuel Rate</a>
                        <a href='display'>Fuel History</a>
                    </div>
                </li>
                <li  className="hover1"><a href='mailto:fuelratepredictor@gmail.com'>contact</a></li>
                {isLoggedIn&& 
                <li  className="hover1"><a href='/' onClick={handleLogOut}>Log out</a></li>}
            </ul>
        </div>
      
    
    </div>
    );
};
 
export default Header;