const mongoose = require('mongoose');
const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, required: [true, 'name is required'] },
        qty: { type: Number, required: true, default: 1 },
        image: { type: String, required: [true, 'Image is required'] },
        price: { type: Number, required: [true, 'Price is required'] },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: [true, 'Product is required'],
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: [true, 'Address is required'] },
      city: { type: String, required: [true, 'City is required'] },
      postalCode: { type: String, required: [true, 'Postal code is required'] },
      country: { type: String, required: [true, 'Country is required'] },
      apartment: { type: String, required: [true, 'Apartment is required'] },
      firstName: { type: String, required: [true, 'First Name is required'] },
      lastName: { type: String, required: [true, 'Last Name is required'] },
    },
    paymentMethod: {
      type: String,
      required: [true, 'Payment method is required'],
      default: 'PAYPAL',
    },
    shippingMethod: {
      name: {
        type: String,
        required: [true, 'Shipping method name is required'],
      },
      cost: {
        type: Number,
        required: [true, 'Shipping method cost is required'],
      },
    },
    paymentResult: {
      id: { type: String },
      status: {
        type: String,
      },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
