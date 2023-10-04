import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";


const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    if(user){
        return children
    }
    else if (loading){

     return   <FadeLoader  color="#36d7b7" />

   }
   return <Navigate to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children:PropTypes.node.isRequired
}

export default PrivateRoute;