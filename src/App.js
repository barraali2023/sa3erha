import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login_Register from './components/LoginPage/Login_Register'; // ✅ Import the component
import HomePage from './components/Home page/HomePage';

import Login from './components/LoginPage/Login';

import ForgotPassword from './components/LoginPage/ForgetPass';
import ResetPassword from './components/LoginPage/ResetPassword';
import Products from './pages/Products';
// import './App.css'
function App() {
  return (
    <Router>
      <Navbar />

      <div className="content">
        <Routes>
          {/* ✅ Add your routes here */}
          <Route path="/Login_Register" element={<Login_Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Forget_passowrd" element={<ForgotPassword/>} />
          <Route path="/Reset-password" element={<ResetPassword/>} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          {/* You can add more routes later */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
