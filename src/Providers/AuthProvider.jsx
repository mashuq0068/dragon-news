import { createContext } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider() 
    const loginWithGoogle = () =>{
        signInWithPopup( auth , googleProvider)
        .then(data => console.log(data.user))
        .catch(error => console.error(error))
}
const loginWithGithub = () =>{
    signInWithPopup(auth , githubProvider)
    .then(data => console.log(data.user))
    .catch(error => console.error(error.user))

}
    const authInfo ={loginWithGoogle , loginWithGithub}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}

            </AuthContext.Provider>
            
        </div>
    );
};


AuthProvider.propTypes = {
    children:PropTypes.node.isRequired
}

export default AuthProvider;