import asyncHandler from "express-async-handler";
import Product from "../models/Product";
import ErrorResponse from "../utils/ErrorResponse";
import { Request, Response, NextFunction } from "express";

interface Query {
  q?: string;
  select?: string;
  sort?: string;
  page?: string;
  limit?: string;
}

// @Desc    Fetch all products
// @Route   GET /api/products
// @Access  Public
const getProducts = asyncHandler(
  async (
    req: Request<{}, {}, {}, Query>,
    res: Response,
    next: NextFunction
  ) => {
    const count = await Product.count();
    // search by price and category
    // sort the result by name
    let query;
    let reqQuery: {
      [key: string]: any;
    } = { ...req.query };

    const removeFields = ["select", "sort", "limit", "page", "q"];

    // filter product by reqEx
    if (req.query.q) {
      reqQuery.name = {
        $regex: req.query.q,
        $options: "i",
      };
    }
    removeFields.forEach((param) => delete reqQuery[param]);
    let queryStr = JSON.stringify(reqQuery);

    // Replace Invalid Oparator
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      (match) => `$${match}`
    );
    query = Product.find(JSON.parse(queryStr));
    // Select Fields
    if (req.query.select) {
      const fields = req.query.select.split(",").join(" ");
      query = query.select(fields);
    }

    // Sort
    if (req.query.sort) {
      const { sort } = req.query;
      query = query.sort(sort.split(",").join(" "));
    } else {
      query = query.sort("-createdAt");
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 100;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    // Apply The Query
    const products = await query;

    res.status(200).json({
      success: true,
      count,
      products,
    });
  }
);

// @Desc    Fetch single product
// @Route   GET /api/products/:id
// @Access  Public
const getProductById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const product = await Product.findById(id).populate({
      path: "reviews.user",
      select: "email",
    });
    if (!product) {
      return next(new ErrorResponse(`Product with Id ${id} Not Found`, 404));
    }

    res.status(200).json(product);
  }
);
// @Desc    Delete a product
// @Route   DELETE /api/products/:id
// @Access  Private/Admin
const deleteProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const product = await Product.findById(id);

    if (!product) {
      return next(new ErrorResponse(`Product with id ${id} Not Found`, 404));
    }

    await product.remove();
    res.status(200).json({ messages: "Product Removed" });
  }
);

// @Desc    Create a product
// @Route   POST /api/products
// @Access  Private/Admin
const createProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user._id;
    const product = await Product.create({ ...req.body, user });

    res.status(201).json(product);
  }
);

// @Desc    Update a product
// @Route   PUT /api/products/:id
// @Access  Private/Admin
const updateProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { name, price, description, images, brand, category, countInStock } =
      req.body;

    const product = await Product.findById(id);

    if (!product) {
      return next(new ErrorResponse(`Product with id ${id} Not found `, 404));
    }

    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.countInStock = countInStock || product.countInStock;

    if (typeof images === "string") {
      product.images.push(images as any);
    }

    await product.save();

    res.status(200).json(product);
  }
);

// @Desc    Create new review
// @Route   POST /api/products/:id/reviews
// @Access  Private
const createProductReview = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { rating, comment } = req.body;
    if (!rating || !comment) {
      return next(new ErrorResponse("Rating and comment are required", 400));
    }

    const name = req.user.firstName + " " + req.user.lastName;
    const user = req.user._id;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return next(new ErrorResponse("Product Not Found", 404));
    }

    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      return next(new ErrorResponse("Product already reviewed", 400));
    }

    const review = {
      name,
      rating: Number(rating),
      comment,
      user,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  }
);

// @Desc    Update  review
// @Route   PUT /api/products/:id/reviews
// @Access  Private
const updateProductReview = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let { rating, comment } = req.body;
    if (!rating && !comment) {
      return next(
        new ErrorResponse("Rating or comment are required for update ", 400)
      );
    }
    const productId = req.params.id;
    const user = req.user._id;
    const product = await Product.findById(productId);

    if (!product) {
      return next(new ErrorResponse("Product Not Found", 404));
    }
    let review = product.reviews.find(
      (review) => review.user.toString() === user.toString()
    );
    if (!review) {
      return next(new ErrorResponse("Review not found", 400));
    }

    review.rating = rating || review.rating;
    review.comment = comment || review.comment;

    await product.save();
    res.status(201).json({ message: "Review Updated" });
  }
);

// @Desc    delete  review
// @Route   DELETE /api/products/:id/reviews
// @Access  Private
const deleteProductReview = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.id;
    const user = req.user._id;
    const product = await Product.findById(productId);

    if (!product) {
      return next(new ErrorResponse("Product Not Found", 404));
    }
    let review = product.reviews.find(
      (review) => review.user.toString() === user.toString()
    );
    if (!review) {
      return next(new ErrorResponse("Review not found", 400));
    }

    product.reviews = product.reviews.filter(
      (review) => review.user.toString() !== user.toString()
    );
    product.numReviews = product.reviews.length;

    if (product.reviews.length !== 0) {
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;
    } else {
      product.rating = 0;
    }

    await product.save();
    res.status(201).json({ message: "Review Deleted" });
  }
);

// @Desc    Create new review
// @Route   POST /api/products/:id/reviews/:reviewId
// @Access  Private
const deleteProductReviewAdmin = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const reviewId = req.params.reviewId;
    const product = await Product.findById(req.params.id);
    if (!product) {
      return next(new ErrorResponse("Product Not Found", 404));
    }

    const review = product.reviews.find(
      (r) => r._id.toString() === reviewId.toString()
    );

    if (!review) {
      return next(new ErrorResponse("Review Not Found", 400));
    }

    product.reviews = product.reviews.filter(
      (review) => review._id.toString() !== reviewId.toString()
    );

    product.numReviews = product.reviews.length;

    if (product.reviews.length !== 0) {
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;
    } else {
      product.rating = 0;
    }

    await product.save();
    res.status(201).json({ message: "Review Removed" });
  }
);

// @Desc    Get top rated products
// @Route   GET /api/products/top
// @Access  Public
const getTopProducts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const products = await Product.find({}).sort({ rating: -1 }).limit(4);

    res.json(products);
  }
);

// @Desc    Get top rated products
// @Route   GET /api/products/top
// @Access  Public
const getNewProducts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const products = await Product.find({}).sort({ createdAt: -1 }).limit(4);

    res.json(products);
  }
);

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  updateProductReview,
  deleteProductReview,
  deleteProductReviewAdmin,
  getTopProducts,
  getNewProducts,
};
