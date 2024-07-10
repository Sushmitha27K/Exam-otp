// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
 

    const handleLogin = () => {
        axios.post('http://localhost:5000/api/auth/login', {
            username,
            password,
            otp
        }).then(res => {
            if (res.data.success) {
                window.location.href = "/exam"; 
            } else {
                alert(res.data.message);
            }
        }).catch(err => {
            console.error(err);
        });
    };

    return (
        <div>
            <center>
            <h2>Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/><br/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
            <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} /><br/><br/>
            <button onClick={handleLogin}>Login</button>
            </center>
        </div>
    );
};

export default Login;
