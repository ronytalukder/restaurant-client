import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("reviews.json")
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

  return (
    <div className="py-24 bg-cyan-500">
      <h1 className="text-3xl text-center text-white font-bold">
        Testimonials
      </h1>

      <div className="container mx-auto">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
      {
        reviews.map(review => (
          <SwiperSlide key={review._id }>
            <div className='m-14 text-center'>
            <Rating
              style={{ maxWidth: 180 }}
              className='m-auto'
              value={review.rating}
              readOnly
            />
                <h1 className='font-bold text-3xl '>{review.name}</h1>
                <p>{review.details}</p>
            </div>
          </SwiperSlide>
        ))
        
      }
      
      </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
