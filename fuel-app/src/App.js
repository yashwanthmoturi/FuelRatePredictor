import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassowrd';
import Home from './pages/Home';
import Display from './pages/Display';
import ClientProfile from './pages/ClientProfile';
 
function App() {
    return (
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path='/forgot' element={<ForgotPassword />} />
                <Route path='/client-profile' element={<ClientProfile />} />
                <Route path='/home' element={<Home />} />
                <Route path='/display' element={<Display />} />
            </Routes>
    );
}
 
export default App;
