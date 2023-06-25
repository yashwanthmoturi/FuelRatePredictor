import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassowrd';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Display from './pages/Display';
 
function App() {
    return (
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path='/forgot' element={<ForgotPassword />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/home' element={<Home />} />
                <Route path='/display' element={<Display />} />
            </Routes>
    );
}
 
export default App;
