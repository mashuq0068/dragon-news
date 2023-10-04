
import { useContext } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { AuthContext } from '../../Providers/AuthProvider';
import facebook from './Facebook.png'
import instagram from './Instagram.png'
import twitter from './Twitter.png'
const SocialLogin = () => {
    const {loginWithGoogle , loginWithGithub} = useContext(AuthContext)
    const handleGoogle =() =>{
        loginWithGoogle()
        .then(data => console.log(data.user))
        .catch(error => console.error(error))
    }
    const handleGithub =() =>{
        loginWithGithub()
        .then(data => console.log(data.user))
        .catch(error => console.error(error))
    }
    return (
        <div className=" h-auto">
            <p className='mb-5 font-bold'>Login With</p>
            <div className='space-y-5'> 
                    
            <button onClick={handleGoogle} className="text-red text-center hover:before:bg-red rounded-lg font-semibold  relative h-[40px] w-64 overflow-hidden border border-blue-500 bg-white px-3 text-blue-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-200 hover:text-white hover:shadow-blue-500 hover:before:left-0 hover:before:w-full"><span className="relative z-10 gap-2 w-max mx-auto flex items-center"><span className='text-xl'><AiOutlineGoogle></AiOutlineGoogle></span> Login with Goggle</span></button>
                    


            <button onClick={handleGithub} className="text-red text-center hover:before:bg-red rounded-lg font-semibold  relative h-[40px]  w-64 overflow-hidden border border-gray-900 bg-white px-3 text-gray-900 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-900 before:transition-all before:duration-200 hover:text-white hover:shadow-gray-900 hover:before:left-0 hover:before:w-full"><span className="relative z-10 gap-2 w-max mx-auto flex items-center"><span className='text-xl'><BsGithub></BsGithub></span> Login with Github</span></button>

            </div>
            <div className='mt-16 drop-shadow-xl shadow-xl'>
                <h2 className='ml-5 font-medium text-lg '>Find Us On</h2>
                <div className='space-y-5 p-5 cursor-pointer'>
                    <p  className='flex gap-2 items-center'><span><img src={facebook} alt="" /></span> Facebook</p>
                    <p className='flex gap-2 items-center'><span><img src={twitter} alt="" /></span> Twitter</p>
                    <p className='flex gap-2 items-center'><span><img src={instagram} alt="" /></span> Instagram</p>
                </div>
            </div>
            
                     
                    


            
        </div>
    );
};

export default SocialLogin;