import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// todo: fix this css file
// import 'swiper/swiper-bundle.css';
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const LatestProducts = ({ history }) => {
  let { error, loading, products } = useSelector(
    (state) => state.featuredProducts
  );

  products = products.reverse();
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
      <div className="hidden lg:block xl:hidden">
        <Swiper
          style={{
            padding: "20px 0 0  0px",
          }}
          slidesPerView={4}
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
      <div className="hidden xl:block ">
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
    </div>
  );
};

export default LatestProducts;
