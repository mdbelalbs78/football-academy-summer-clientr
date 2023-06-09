import { useEffect, useState } from "react";
import Ins from "../Ins/Ins";

const Instructors = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('popular.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[])
    return (
        <div className=" grid md:grid-cols-3 mb-36">
            {
                menu.map(item => <Ins
                key={item._id}
                item={item}
                ></Ins>)
            }
        </div>
    );
};

export default Instructors;