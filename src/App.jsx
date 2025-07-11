//App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import Loading from './view-pages/Loading';
import Home from './view-pages/HomePage';
import Login from './view-pages/Login';
import SignIn from './view-pages/SignIn';

// import ForgotPassword from './view-pages/ForgotPassword';
// import ResetPassword from './view-pages/ResetPassword';
// import VerifyEmail from './view-pages/VerifyEmail';
// import VerifyPhone from './view-pages/VerifyPhone';
// import VerifyOTP from './view-pages/VerifyOTP';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/verify-phone" element={<VerifyPhone />} />
        <Route path="/verify-otp" element={<VerifyOTP />} /> */}
      </Routes>
      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
