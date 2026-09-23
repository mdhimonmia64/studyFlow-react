import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
    
    if(loading){
        return <span className="loading loading-spinner text-success"></span>
    }
    if(!user){
        return <Navigate to="/sign-in" replace/>
    }

    return children;
};

export default PrivateRoute;