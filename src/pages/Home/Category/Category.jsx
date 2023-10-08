import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/sectionTitle,";

const Category = () => {
  return (
    <section>
<div>
    <SectionTitle headding="---From 11.00am to 3.00pm---" subheading="Order Online" />
</div>
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        >
        <SwiperSlide> <img src={slide1} alt="" />  </SwiperSlide>
        <SwiperSlide> <img src={slide2} alt="" />  </SwiperSlide>
        <SwiperSlide> <img src={slide3} alt="" />  </SwiperSlide>
        <SwiperSlide> <img src={slide4} alt="" />  </SwiperSlide>
        <SwiperSlide> <img src={slide5} alt="" />  </SwiperSlide>
      </Swiper>
    </div>
          </section>
  );
};

export default Category;
