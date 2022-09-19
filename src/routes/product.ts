import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  updateProductReview,
  deleteProductReview,
  getNewProducts,
  deleteProductReviewAdmin,
} from "../controllers/productController";
import { authorize, protect } from "../middleware/auth";
import { bodyCheck } from "../middleware/bodyCheck";

const productRouter = express.Router();
productRouter
  .route("/")
  .get(getProducts)
  .post(protect, authorize, createProduct);

productRouter
  .route("/:id/reviews")
  .post(protect, createProductReview)
  .put(protect, updateProductReview)
  .delete(protect, deleteProductReview);

productRouter.delete(
  "/:id/reviews/:reviewId",
  [protect, authorize],
  deleteProductReviewAdmin
);

productRouter.get("/top", getTopProducts);
productRouter.get("/new", getNewProducts);

productRouter
  .route("/:id")
  .get(getProductById)
  .delete(protect, authorize, deleteProduct)
  .put(protect, authorize, bodyCheck(), updateProduct);

export default productRouter;
