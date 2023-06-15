import { Fade } from "react-awesome-reveal";
import img1 from "../../../assets/g1.avif";
import img2 from "../../../assets/g2.avif";
import img3 from "../../../assets/g3.avif";
import img4 from "../../../assets/g4.avif";
import img5 from "../../../assets/g5.avif";
const ExtraSection = () => {
    return (
    <div>
       <Fade direction='left'>
       <div className="mt-5" >
      <h2 className="text-5xl font-bold  text-center p-3">Our Gallery</h2>
      
      <section className="py-4 dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4" data-aos="fade-up"
     data-aos-duration="3000" >
        <img
            src={img5}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          />

          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={img1}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img4}
          />
        </div>
      </section>
    </div>
        </Fade>
    
        </div>
    );
};

export default ExtraSection;