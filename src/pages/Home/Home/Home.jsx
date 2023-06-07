import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        
        <div>
        <Helmet>
         <title>Football Academy | Home</title>
      </Helmet>

            <Banner></Banner>
        </div>
    );
};

export default Home;