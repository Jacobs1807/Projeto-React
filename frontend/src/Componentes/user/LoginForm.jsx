import React, { useState } from 'react';
import axios from 'axios';
import Main from '../template/Main';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

export default function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
}