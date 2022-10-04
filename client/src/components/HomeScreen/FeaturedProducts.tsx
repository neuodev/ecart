import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import ProductCard from "./ProductCard";
import { useAppSelector } from "../../store";
import FeaturedProductsSkeleton from "./FeaturedProductsSkeleton";
import { Alert, AlertTitle } from "@mui/material";
import { useSlides } from "../../utils/slides";
import "swiper/css";

const FeaturedProducts: React.FC<{}> = () => {
  const numOfSlides = useSlides();
  const { loading, products, error } = useAppSelector(
    (state) => state.featuredProducts
  );

  return (
    <div className="container mx-auto">
      {loading ? (
        <FeaturedProductsSkeleton />
      ) : error ? (
        <Alert color="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      ) : (
        <div>
          <Swiper
            style={{
              padding: "20px 0 0 0px",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={numOfSlides}
            spaceBetween={20}
            loop
            modules={[Autoplay]}
          >
            {products.map((product) => (
              <SwiperSlide key={product._id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
