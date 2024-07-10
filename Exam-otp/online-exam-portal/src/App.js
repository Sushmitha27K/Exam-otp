// src/App.js
import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Exam from './components/Exam';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <div>
                <Routes>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/exam" element={<Exam/>} />
                    
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
