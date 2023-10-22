import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import { useState } from "react";
const Banner = () => {

  let [user, setUser] = useState([])

  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUser(json))




  return (
    <section className="py-[200px] container mx-auto">
    


  <div className="banner">
{

  user.slice().reverse().map((item, i) => (
    <div className="item" key={i} >
        <div className="bg-orange-500 item_content" key={i}> {item.id} </div>
    </div>
  ))
}
  </div>
  

    
    </section>
    // <div>
    //   <Carousel>
    //     <div>
    //       <img src={img1} alt="img1" />
    //     </div>
    //     <div>
    //       <img src={img2} alt="img2" />
    //     </div>
    //     <div>
    //       <img src={img3} alt="img3" />
    //     </div>
    //     <div>
    //       <img src={img4} alt="img4" />
    //     </div>
    //   </Carousel>
    // </div>
  );
};

export default Banner;

// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
// module 74 -3
