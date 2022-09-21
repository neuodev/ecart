import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Todo: Fix this css file
// import "swiper/swiper-bundle.css";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";

const render = (products, history) => (
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
            <ProductCard product={product} history={history} />
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
            <ProductCard product={product} history={history} />
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
            <ProductCard product={product} history={history} />
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
            <ProductCard product={product} history={history} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
);
const FeaturedProducts = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state) => state.featuredProducts
  );

  return (
    <div className="container mx-auto">
      {render(products, history)}

      {/* 
     
 */}
    </div>
  );
};

export default FeaturedProducts;
