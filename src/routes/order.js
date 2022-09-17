const express = require('express');
const {
  addOrderItems,
  getOrders,
  getOrderById,
  getMyOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
} = require('../controllers/orderController');
const { authorize, protect } = require('../middleware/auth');
const orderRouter = express.Router();
orderRouter.route('/').post(protect, addOrderItems);
orderRouter
  .route('/')
  .post(protect, addOrderItems)
  .get(protect, authorize, getOrders);
orderRouter.route('/myorders').get(protect, getMyOrders);
orderRouter.route('/:id').get(protect, getOrderById);
orderRouter.route('/:id/pay').put(protect, updateOrderToPaid);
orderRouter
  .route('/:id/deliver')
  .put(protect, authorize, updateOrderToDelivered);

module.exports = orderRouter;
