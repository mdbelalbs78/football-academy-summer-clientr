import { useEffect, useState } from "react";
import PopularItem from "../../../Shared/PopularItem/PopularItem";
import Coach from "../Coach/Coach";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/popular')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[])
    return (
        <div>
            <h2 className="text-center mt-5 p-5 text-3xl mb-2 font-semibold">Popular Classes Section</h2>
            <div className=" grid md:grid-cols-3 mb-12">
                
                {
                    menu.map(item => <PopularItem
                    key={item._id}
                    item={item}
                    ></PopularItem>)
                }
            </div>
             
            <div>
            <h2 className="text-center text-3xl mb-2 mt-5 p-3 font-semibold">Popular Instructors Section</h2>
            <div className=" grid md:grid-cols-3 mb-12">
                
                {
                    menu.map(item => <Coach
                        key={item._id}
                        item={item}
                        ></Coach>)
                }
            </div>
            </div>
            
        </div>
    );
};

export default PopularMenu;