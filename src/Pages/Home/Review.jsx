import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("/review.json") // Make sure this file is in the public directory
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="container mx-auto bg-[#F2F8FE] py-16 rounded-xl">
      <div className="w-full md:w-2/3 mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center ">
          What Our Clients Say?
        </h1>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="mySwiper my-2"
        >
          {review.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center gap-4  bg-[#F2F8FE]">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="text-center my-2 text-black px-16">
                  {review.details}
                </p>
                <h1 className="text-3xl font-bold text-black px-16">
                  {review.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
