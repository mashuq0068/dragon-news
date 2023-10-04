import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



const Categories = () => {
    const [categories , setCategories ] = useState([])
    useEffect(()=>{
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))

    },[])
    return (
        <div className="h-auto drop-shadow-xl shadow-xl categories">
            <p className="font-bold mb-5">All Category</p>
            <ul className="flex flex-col">
                {categories.map(category =><NavLink to={`/${category.id}` } key={category.id} className="p-3 text-[#9F9F9F]">{category.name}</NavLink> )}
            </ul>

            
        </div>
    );
};

export default Categories;