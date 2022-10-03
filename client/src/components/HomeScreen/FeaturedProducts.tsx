import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import { IProduct } from "../../types";
import { useAppSelector } from "../../store";

const render = (products: IProduct[]) => (
  <>
    <div className="block md:hidden">
      <Swiper
        style={{
          padding: "20px 0 0  0px",
        }}
        slidesPerView={2}
        spaceBetween={5}
        loop={true}
      >
        {products.map((product) => (
          <SwiperSlide>
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
        spaceBetween={10}
        loop={true}
      >
        {products.map((product) => (
          <SwiperSlide>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="hidden lg:block xl:hidden">
      <Swiper
        style={{
          padding: "20px 0 0  0px",
        }}
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
      >
        {products.map((product) => (
          <SwiperSlide>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className="hidden xl:block">
      <Swiper
        style={{
          padding: "20px 0 0  0px",
        }}
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
      >
        {products.map((product) => (
          <SwiperSlide>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
);
const FeaturedProducts = () => {
  // TODO: Handler loading and error states
  const { loading, products, error } = useAppSelector(
    (state) => state.featuredProducts
  );

  return (
    <div className="container mx-auto">
      <div className="block md:hidden">
        <Swiper
          style={{
            padding: "20px 0 0  0px",
          }}
          slidesPerView={2}
          spaceBetween={5}
          loop={true}
        >
          {products.map((product, idx) => (
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
          spaceBetween={10}
          loop={true}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
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
          spaceBetween={10}
          loop={true}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden xl:block">
        <Swiper
          style={{
            padding: "20px 0 0 0px",
          }}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;