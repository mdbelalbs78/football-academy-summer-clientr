import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';
import PopularMenu from "./PopularMenu/PopularMenu";
import { useEffect } from "react";



const Home = () => {
    useEffect(() =>{
        fetch('')
    }, [])
    return (
        
        <div>
        <Helmet>
         <title>Football Academy | Home</title>
      </Helmet>

            <Banner></Banner>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;