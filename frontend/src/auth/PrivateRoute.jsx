// src/auth.PrivateRoute.jsx

import React, { useContext} from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
    const { authenticated } = useContext(AuthContext);

    if(!authenticated){
        return <Navigate to="/login" replace />
    }

    return children;
}

export default PrivateRoute;