// src/auth/AuthContext.jsx

import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthticated] = useState(false);

    useEffect (() => {
        const token = localStorage.getItem('token');
        if(token) setAuthticated(true);
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        setAuthticated(true);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setAuthticated(false);
    };

    return(
        <AuthContext.Provider value = {{ authenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};