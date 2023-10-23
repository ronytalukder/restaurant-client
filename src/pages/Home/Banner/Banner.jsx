import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
const Banner = () => {


  return (
    <section className="py-[200px] container mx-auto">
    
      { <div>
         <Carousel>
           <div>
             <img src={img1} alt="img1" />
           </div>
           <div>
             <img src={img2} alt="img2" />
           </div>
           <div>
             <img src={img3} alt="img3" />
           </div>
           <div>
             <img src={img4} alt="img4" />
           </div>
         </Carousel>
       </div> }
    </section>
  );
};

export default Banner;

// module 74 -3