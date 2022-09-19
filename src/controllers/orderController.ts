import asyncHandler from "express-async-handler";
import Order, { IOrder } from "../models/Order";
import ErrorResponse from "../utils/ErrorResponse";
import { Request, Response, NextFunction } from "express";

// @Desc    Create new order
// @Route   POST /api/v1/orders
// @Access  Private
const addOrderItems = asyncHandler(
  async (
    req: Request<
      {},
      {
        orderItems: {
          name: string;
          qty: number;
          image: string;
          price: string;
          product: string;
        };
        shippingAddress: {
          address: string;
          city: string;
          postalCode: string;
          country: string;
          apartment: string;
          firstName: string;
          lastName: string;
        };
        paymentMethod: string;
        shippingMethod: {
          name: string;
          cost: string;
        };
        txPrice: number;
        shippingPrice: number;
        totalPrice: number;
      }
    >,
    res: Response<IOrder>,
    next: NextFunction
  ) => {
    const {
      orderItems,
      shippingAddress,
      shippingMethod,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      return next(new ErrorResponse("Order items is required"));
    } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        shippingMethod,
        taxPrice,
        shippingPrice,
        totalPrice,
      });

      const createdOrder = await order.save();
      if (!createdOrder) {
        return next(new ErrorResponse("Can't create the order "));
      }

      res.status(201).json(createdOrder);
    }
  }
);
// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res, next) => {
  const orderId = req.params.id;
  const order = await Order.findById(orderId).populate("user", "name email");

  if (order) {
    res.json(order);
  } else {
    return next(new ErrorResponse("Order Not Found", 404));
  }
});

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res, next) => {
  const orderId = req.params.id;
  const {
    id,
    status,
    update_time,
    payer: { email_address },
  } = req.body;
  if (!id || !status || !update_time || !email_address) {
    return next(new ErrorResponse("payment info is required"));
  }
  const order = await Order.findById(orderId);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id,
      status,
      update_time,
      email_address,
    };

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    return next(new ErrorResponse("Order Not Found", 404));
  }
});

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);

    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();

      res.json(updatedOrder);
    } else {
      return next(new ErrorResponse("Order Not Found", 404));
    }
  }
);

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const user = req.user._id;
  const orders = await Order.find({ user });
  res.json(orders);
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate("user", "id name");
  const count = await Order.countDocuments();
  res.json({ success: true, count, orders });
});

export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
};
