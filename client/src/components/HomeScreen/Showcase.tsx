import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import ShowcaseSlide1 from "./ShowcaseSlide1";
import ShowcaseSlide2 from "./ShowcaseSlide2";
import "swiper/css";

const slides = [<ShowcaseSlide1 />, <ShowcaseSlide2 />];

const Showcase = () => {
  return (
    <div>
      <Swiper
        loop
        className="bg-gray-900"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="h-600 sm:h-70vh">
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Showcase;
