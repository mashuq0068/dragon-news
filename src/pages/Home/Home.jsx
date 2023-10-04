import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import News from "../../components/News/News";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 mt-20 gap-7">
                <Categories></Categories>
                <News></News>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Home;