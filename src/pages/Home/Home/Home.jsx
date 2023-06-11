import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';
import PopularMenu from "./PopularMenu/PopularMenu";
import ExtraSection from "../ExtraSection/ExtraSection";



const Home = () => {
   
    return (
        
        <div>
        <Helmet>
         <title>Football Academy | Home</title>
      </Helmet>
            <Banner></Banner>
            <PopularMenu></PopularMenu>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;