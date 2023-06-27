import React from 'react';
import './Header.css';
 
const Header = () => {
    return (
    <div class="nav-container">
      
        <div class="div1">
          <a href="#"><strong>FRP</strong></a>
        </div>
      
        <div class="div2">
            <ul>
                <li class="hover1"><a href='#' >Home</a></li>
                <li id='dropdown' >
                    <a href='#'>Services</a>
                    <div className='dropdown-content'>
                        <a href='#'>Fuel Rate</a>
                        <a href='#'>Fuel History</a>
                    </div>
                </li>
                <li  class="hover1"><a href='#'>contact</a></li>
            </ul>
        </div>
      
    
    </div>
    );
};
 
export default Header;