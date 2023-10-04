import { sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";


const VerificationPage = () => {
    const navigate = useNavigate()
    
    const handleVerification = () => {
        sendEmailVerification(auth.currentUser)
        .then(data => {
            console.log(data)
            navigate('/')

        })
    }
    return (
        <>
        
        <div className="flex-col  items-center justify-center h-screen">
            <div className="flex font-bold text-2xl flex-col justify-center items-center mt-12 mb-12">
            <p>!</p>
            <p>Verification</p>
            </div>
            <div className="text-gray-900 mx-auto relative p-[5%] font-bold w-[60%] drop-shadow-xl shadow-xl h-[200px] ">
            <p className="mt-12">! Please verify your email </p>
           <div className="text-right absolute bottom-3 right-3"> 
           <button onClick={handleVerification} className="btn t px-5 font-bold text-white bg-gray-900 hover:bg-gray-950">Verify</button>
           </div>
            </div>
        </div>
        </>
    );
};

export default VerificationPage;