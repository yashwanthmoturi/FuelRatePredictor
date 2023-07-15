import React, {useState, useEffect} from 'react';
import './Display.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

const Display = () => {

  const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3001/getFuelHistory?email=${sessionStorage.getItem("email")}`, {mode:'cors'}).then((response)=>{
          console.log(response.data);
          setData(response.data);
        }).catch(error => {
          console.log(error);
        });
    },[]);


    return (
        <div>
            <Header isLoggedIn={true}/>
            
        <div className="fuelhistory-container">
       {data.length ? <h1>FUEL Quote History</h1> : <h1>FUEL Quote History is Empty</h1>} 

             {data.length ?
              <table id="fuelhistory">
              <tr>
                <th   style={{borderTopLeftRadius:"12px"}}>Gallons Requested</th>
                <th>Delivery Address</th>
                <th>Delivery Date</th>
                <th>Suggested Price / gallon</th>
                <th style={{borderTopRightRadius:"12px"}}>Total Amount Due</th>
              </tr>
              {data.map((element)=>{
                const {gallons_requested, delivery_date, delivery_address, suggested_price_per_gallon, total_amount_due} = element;
                const date = new Date(delivery_date);
                return <tr>
                <td>{gallons_requested}</td>
                <td>{delivery_address}</td>
                <td>{date.toLocaleDateString()}</td>
                <td>{suggested_price_per_gallon}</td>
                <td>{total_amount_due}</td>
              </tr>
              })}
              
              
            </table>
            :
            <></>
             } 

        </div>
        <Footer/>
        </div>
    );
};
 
export default Display;