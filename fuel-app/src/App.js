import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassowrd';
import FuelRateQuoter from './pages/FuelRateQuoter';
import Display from './pages/Display';
import ClientProfile from './pages/ClientProfile';
 
function App() {
    return (
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path='/forgot' element={<ForgotPassword />} />
                <Route path='/client-profile' element={<ClientProfile />} />
                <Route path='/fuel-rate-quoter' element={<FuelRateQuoter />} />
                <Route path='/display' element={<Display />} />
            </Routes>
    );
}
 
export default App;
