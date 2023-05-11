/* eslint-disable react/prop-types */
import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user,}=useContext(AuthContext)
    const location=useLocation();
    // if(loading){
    //     return <p>Loading....</p>
    // }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>

    }
    return children;
   
};

export default PrivateRoute;