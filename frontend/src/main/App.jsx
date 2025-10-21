import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../auth/AuthContext';
import PrivateRoute from '../auth/PrivateRoute';

//Componentes principais 
import Logo from '../componentes/template/Logo'
import Nav from '../componentes/template/Nav'

//Páginas
import Login from '../components/user/LoginForm';
import Register from '../components/user/Register';
import UserCrud from '../components/user/UserCrud';
import Home from '../components/home/Home';
import Footer from '../componets/template/Footer';

function App(){
  return(
    <AuthProvider>
      <Router>
        <div className="app">
          {/* Layout principal com grid */}
        </div>
      </Router>
    </AuthProvider>
  )
}