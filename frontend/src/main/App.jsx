import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../auth/AuthContext';
import PrivateRoute from '../auth/PrivateRoute';

//Componentes principais 
import Logo from '../Componentes/template/Logo'
import Nav from '../Componentes/template/Nav'

//Páginas
import Login from '../Componentes/user/LoginForm';
import Register from '../Componentes/user/Register';
import UserCrud from '../Componentes/user/UserCrud';
import Home from '../Componentes/home/Home';
import Footer from '../Componentes/template/Footer';

function App(){
  return(
    <AuthProvider>
      <Router>
        <div className="app">
          {/* layout principal com grid e sem fundo branco */}
          {/* Exibe a estrutura fixa apenas se o usuário estiver logado */}
          <PrivateRoute>
            <Logo />
            <Nav />
          </PrivateRoute>
          <main className="app-content">
            <Routes>
              {/* Rotas Publicas */}
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>

              {/* Rotas privadas */}
              <Route
                path="/"

                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />

              <Route 
                path="/users"
                
                element={
                  <PrivateRoute>
                    <UserCrud />
                  </PrivateRoute>
                }
              />

              {/* Redirecionamento padrão */}
              <Route path="*" element={<Navigate to= "login" replace/>}/>
            </Routes>
          </main>
          <PrivateRoute>
            <Footer />
          </PrivateRoute>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App;