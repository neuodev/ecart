export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

export interface IReview {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  user: {
    _id: string;
    email: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface IProduct {
  _id: string;
  user: string; //! User ID
  name: string;
  images: string[];
  brand: string;
  category: string[];
  description: string;
  reviews: IReview[];
  rating: number;
  numReviews: number;
  discount: number;
  price: number;
  countInStock: number;
  createdAt: string;
  updatedAt: string;
}

export interface IOrderItem {
  name: string;
  qty: number;
  image: string;
  price: number;
  product: IProduct;
}

export interface IPaymentResult {
  id: string;
  status: string;
  update_time: string;
  email_address: string;
}

export interface IOrder {
  _id: string;
  user: string; //! User ID
  orderItems: IOrderItem[];
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
  shippingMethod: ShippingMethod;
  paymentResult: IPaymentResult;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: string;
  isDelivered: boolean;
  deliveredAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICartItem {
  name: string;
  qty: number;
  price: number;
  discount: number;
  image: string;
  product: string;
  rating: number;
}

export interface ShippingAddr {
  address: string;
  city: string;
  postalCode: string;
  country: string;
  apartment: string;
  firstName: string;
  lastName: string;
  email: string;
  save: boolean;
}

export interface ShippingMethod {
  name: string;
  cost: number;
}

export type BaseState<T> = T & {
  loading: boolean;
  error: string | null;
};

// Generic action generator to handle common state changes
export type BaseAction<T, Req, Ok, Err, Reset = "RESET"> =
  | { type: Req; payload?: undefined }
  | {
      type: Ok;
      payload: T;
    }
  | {
      type: Err;
      payload: string;
    }
  | {
      type: Reset;
      payload?: undefined;
    };
