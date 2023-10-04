import { Link } from "react-router-dom";


const News = () => {
    return (
        <div className=" shadow-xl hover:shadow-black border-black col-span-2 h-[550px]">
           <Link to='/readMore'> <button className="btn btn-outline">Read More</button></Link>
            
        </div>
    );
};

export default News;