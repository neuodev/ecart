import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import ProductCard from "./ProductCard";
import { useAppSelector } from "../../store";
import FeaturedProductsSkeleton from "./FeaturedProductsSkeleton";
import { Alert, AlertTitle } from "@mui/material";
import { useSlides } from "../../utils/slides";
import "swiper/css";

const LatestProducts: React.FC<{}> = () => {
  const numOfSlides = useSlides();
  let { error, loading, products } = useAppSelector(
    (state) => state.featuredProducts
  );

  // Make a reversed copy
  const reversed = [...products].reverse();

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
              padding: "20px 0 0  0px",
            }}
            slidesPerView={numOfSlides}
            spaceBetween={20}
            loop
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {reversed.map((product) => (
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

export default LatestProducts;
