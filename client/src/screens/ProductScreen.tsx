import React, { useEffect } from "react";
import ImageGallary from "../components/ProductScreen/ImageGallary";
import ProductDetails from "../components/ProductScreen/ProductDetails";
import MoreInfo from "../components/ProductScreen/MoreInfo";
import { useSelector, useDispatch } from "react-redux";
import { getProductAction } from "../actions/products";
import ProductScreenSkeleton from "../components/ProductScreen/ProductScreenSkeleton";
import { useParams } from "react-router-dom";
import ErrorScreen from "../components/ProductScreen/ErrorScreen";
import { RootState, useAppDispatch } from "../store";

const ProductScreen = () => {
  const dispatch = useAppDispatch();
  const productId = useParams().id;
  const { product, error, loading } = useSelector<
    RootState,
    RootState["product"]
  >((state) => state.product);
  const createReview = useSelector<RootState, RootState["createReview"]>(
    (state) => state.createReview
  );
  const deleteReview = useSelector<RootState, RootState["deleteReview"]>(
    (state) => state.deleteReview
  );

  useEffect(() => {
    if (productId) {
      dispatch(getProductAction(productId));
    }
  }, [dispatch, productId, createReview.success, deleteReview.success]);

  return (
    <div className="py-5 container mx-auto">
      {loading ? (
        <ProductScreenSkeleton />
      ) : error ? (
        <div>
          <ErrorScreen />
        </div>
      ) : (
        product && (
          <div className="grid grid-cols-12 mb-20">
            <div className="col-span-12 md:col-span-5 lg:col-span-5 xl:col-span-4">
              <ImageGallary images={product.images} name={product.name} />
            </div>
            <div className="col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-8 mb-20">
              <ProductDetails product={product} />
            </div>
            <div className="col-span-12">
              <MoreInfo product={product} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductScreen;
