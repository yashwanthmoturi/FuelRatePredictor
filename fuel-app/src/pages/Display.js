import React from 'react';
import './Display.css';
import Header from './Header';
import Footer from './Footer';
const Display = () => {
    return (
        <div>
            <Header />
            
        <div class="fuelhistory-container">
        <h1>FUEL Quote History</h1>

              <table id="fuelhistory">
  <tr>
    <th   style={{borderTopLeftRadius:"12px"}}>Gallons Requested</th>
    <th>Delivery Address</th>
    <th>Delivery Date</th>
    <th>Suggested Price / gallon</th>
    <th style={{borderTopRightRadius:"12px"}}>Total Amount Due</th>
  </tr>
  <tr>
    <td>100</td>
    <td>TX</td>
    <td>04/08/2023</td>
    <td>3.65</td>
    <td>365</td>
  </tr>
  <tr>
    <td>50</td>
    <td>CA</td>
    <td>05/03/2023</td>
    <td>3.44</td>
    <td>172</td>
  </tr>
  <tr>
  <td>51</td>
  <td>NY</td>
  <td>06/15/2023</td>
  <td>3.88</td>
  <td>198</td>
</tr>
<tr>
  <td>52</td>
  <td>TX</td>
  <td>07/22/2023</td>
  <td>3.76</td>
  <td>196</td>
</tr>
<tr>
  <td>53</td>
  <td>FL</td>
  <td>08/10/2023</td>
  <td>3.92</td>
  <td>208</td>
</tr>
</table>

        </div>
        <Footer/>
        </div>
    );
};
 
export default Display;