import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import VerificationPage from "../pages/VerificationPage/VerificationPage";
import ReadMore from "../components/ReadMore/ReadMore";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LoginPage></LoginPage>
            },
            {
                path:'/registration',
                element:<RegistrationPage></RegistrationPage>
            },
            {
                path:'/verification',
                element:<VerificationPage></VerificationPage>
            },
            {
                path:'/readMore',
                element:<PrivateRoute><ReadMore></ReadMore></PrivateRoute>

                   
                   



            }
        ]
    }
])
export default router