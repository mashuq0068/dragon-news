
import userImg from './user.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const {signOutUser ,user} = useContext(AuthContext)
    
    return (

        <div className="flex justify-between  gap-20 items-center mt-12">

            <div className=" flex-1 flex justify-end  ">
                <ul className="flex justify-center items-center gap-7 ">
                  <NavLink to='/'>Home</NavLink>
                  <NavLink>About</NavLink>
                  <NavLink>Career</NavLink>
                </ul>
            </div>
            <div className="flex justify-end items-center gap-5 ">
                <p>{user?.displayName}</p>
                <img className="w-[6%] cursor-pointer" src={userImg} alt="" />
                <NavLink to='/login'>
                <button className="btn btn-neutral px-7 bg-gray-900">Login</button>
                </NavLink>
                {
                    user ? <button onClick={()=>{
                        signOutUser()
                    }} className="btn btn-neutral px-7 bg-gray-900">signOut</button> :
                    ""
                }
            </div>
            
        </div>
    );
};

export default Navbar;