import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const[loading , setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider() 
     const loginWithGoogle = () =>{
      return  signInWithPopup( auth , googleProvider)
       
}
const loginWithGithub = () =>{
    setLoading(true)
 return   signInWithPopup(auth , githubProvider)
   

}
const registerWithEmailPassword = (email , password) => {
    setLoading(true)
return   createUserWithEmailAndPassword(auth , email , password)

}
const loginWithEmailPassword = (email , password) => {
    setLoading(true)
 return  signInWithEmailAndPassword(auth , email , password)

}
const signOutUser = () =>{
    setLoading(true)
return    signOut(auth)
}

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
        setUser(currentUser),
        setLoading(false)
    })
    return (()=>{
        unSubscribe()
        
    })
        
},[])
    
        

    const authInfo ={
        loginWithGoogle ,
        loginWithGithub ,
        registerWithEmailPassword,
        loginWithEmailPassword,
        signOutUser,
        loading,
        user
    }
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