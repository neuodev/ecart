import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "./ProductCard";
import { useAppSelector } from "../../store";

const LatestProducts: React.FC<{}> = () => {
  let { error, loading, products } = useAppSelector(
    (state) => state.featuredProducts
  );

  // Make a reversed copy
  const reversed = [...products].reverse();

  return (
    <div className="container mx-auto">
      <div className="block md:hidden">
        <Swiper
          style={{
            padding: "20px 0 0  0px",
          }}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
        >
          {reversed.map((product, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:block lg:hidden">
        <Swiper
          style={{
            padding: "20px 0 0  0px",
          }}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
        >
          {reversed.map((product, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:block xl:hidden">
        <Swiper
          style={{
            padding: "20px 0 0 0px",
          }}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
        >
          {reversed.map((product, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden xl:block ">
        <Swiper
          style={{
            padding: "20px 0 0  0px",
          }}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
        >
          {reversed.map((product) => (
            <SwiperSlide>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestProducts;
