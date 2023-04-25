import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import Carousel1 from "../assets/carousel1.jpg";
import Carousel3 from "../assets/carousel3.jpg";
import Carousel4 from "../assets/carousel4.jpg";
import Carousel5 from "../assets/carousel5.jpg";
import Carousel6 from "../assets/carousel.jpg";

const Slider = () => {
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 3,
        },
      }}
      className="my-auto h-full "
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={true}
      speed={1500}
      simulateTouch={true}
      preloadImages={true}
      loop={true}
      navigation={true}
      spaceBetween={30}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("Slide change")}
    >
      <SwiperSlide>
        <img src={Carousel4} alt="Images" className="  w-full " />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Carousel3} alt="Images" className="  w-full " />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Carousel1} alt="Images" className=" w-full " />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Carousel6} alt="Images" className=" w-full " />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Carousel5} alt="Images" className=" w-full " />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
