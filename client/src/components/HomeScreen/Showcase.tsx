import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import ShowcaseSlide1 from "./ShowcaseSlide1";
import ShowcaseSlide2 from "./ShowcaseSlide2";
import "swiper/css";

SwiperCore.use([]);

const Showcase = () => {
  return (
    <div>
      <Swiper
        loop
        className="min-h-70vh"
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <ShowcaseSlide1 />
        </SwiperSlide>
        <SwiperSlide>
          <ShowcaseSlide2 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Showcase;
