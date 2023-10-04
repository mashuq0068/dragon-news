import { NavLink } from "react-router-dom";
import user from './user.png'

const Navbar = () => {
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
                <img className="w-[16%] cursor-pointer" src={user} alt="" />
                <NavLink to='/login'>
                <button className="btn btn-neutral px-7 bg-gray-900">Login</button>
                </NavLink>
            </div>
            
        </div>
    );
};

export default Navbar;