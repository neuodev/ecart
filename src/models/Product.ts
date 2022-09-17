import mongoose, { InferSchemaType, Model, Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: [true, "Rating is required "] },
    comment: {
      type: String,
      required: [true, "Comment is requied to add a review"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, `User is required`],
      ref: "User",
    },
    name: {
      type: String,
      required: [true, `Name is required`],
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    brand: {
      type: String,
      required: [true, `brand is required`],
      default: "NO-BRAND",
    },
    category: [
      {
        type: String,
        required: true,
        default: "NO CATEGORY",
      },
    ],
    description: {
      type: String,
      required: [true, `Descritption is required`],
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
      max: [5, "Rating cant't be more that five"],
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
export type IProdcut = InferSchemaType<typeof productSchema> & { _id: string };
type ProductModel = Model<IProdcut, {}, {}>;
const Product = mongoose.model<IProdcut, ProductModel>(
  "Product",
  productSchema
);
export default Product;
