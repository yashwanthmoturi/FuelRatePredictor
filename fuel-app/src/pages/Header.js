import React from 'react';
import './Header.css';

const Header = () => {
    return (
    <div class="nav-container">
      
        <div class="div1">
          <a href='home'><strong>FRP</strong></a>
        </div>
      
        <div class="div2">
            <ul>
                <li class="hover1"><a href='home' >Home</a></li>
                <li id='dropdown' >
                    <div>Services</div>
                    <div className='dropdown-content'>
                        <a href='home'>Fuel Rate</a>
                        <a href='display'>Fuel History</a>
                    </div>
                </li>
                <li  class="hover1"><a href='mailto:fuelratepredictor@gmail.com'>contact</a></li>
            </ul>
        </div>
      
    
    </div>
    );
};
 
export default Header;