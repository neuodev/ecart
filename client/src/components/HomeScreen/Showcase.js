import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import ShowcaseSlide1 from "./ShowcaseSlide1";
import ShowcaseSlide2 from "./ShowcaseSlide2";
import "swiper/css";

SwiperCore.use([]);

const Showcase = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <ShowcaseSlide1 />
      </SwiperSlide>
      <SwiperSlide>
        <ShowcaseSlide2 />
      </SwiperSlide>
    </Swiper>
  );
};

export default Showcase;
