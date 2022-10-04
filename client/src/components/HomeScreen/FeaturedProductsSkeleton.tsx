import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import ProductSkeleton from "../utils/ProductSkeleton";
import { useSlides } from "../../utils/slides";
import "swiper/css";

const FeaturedProductsSkeleton: React.FC<{}> = () => {
  const numOfSlides = useSlides();

  return (
    <div>
      <Swiper
        style={{
          padding: "20px 0 0  0px",
        }}
        slidesPerView={numOfSlides}
        spaceBetween={3}
        loop={true}
      >
        {new Array(5).fill(1).map((_, idx) => (
          <SwiperSlide key={idx}>
            <ProductSkeleton />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProductsSkeleton;
