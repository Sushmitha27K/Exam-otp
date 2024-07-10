// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        axios.post('http://localhost:5000/api/auth/register', {
            username,
            password,
            email
        }).then(res => {
            alert(res.data);
        }).catch(err => {
            console.error('Axios error:', err); // Log detailed error
            alert('Error registering user. Please try again.');
        });
    };

    return (
        <div>
            <center>
            <h2>Register</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/><br/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
            <button onClick={handleRegister}>Register</button>
            </center>
        </div>
    );
};

export default Register;
