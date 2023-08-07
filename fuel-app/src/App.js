import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/Login';
import FuelRateQuoter from './pages/FuelRateQuoter';
import Display from './pages/Display';
import Home from './pages/Home';
import ClientProfile from './pages/ClientProfile';
import { Navigate } from 'react-router-dom'; 

function App() {
    return (
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/client-profile' element={<ClientProfile />} />
                <Route path='/fuel-rate-quoter' element={<FuelRateQuoter />} />
                <Route path='/display' element={<Display />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
    );
}
 
export default App;