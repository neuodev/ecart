export const LOCAL_STORAGE = {
  userInfo: "USER_INFO",
  cartItems: "CART_ITEMS",
  shippingAddr: "SHIPPING_ADDRESS",
  paymentMethod: "PAYMENT_METHOD",
  shippingMethod: "SHIPPING_METHOD",
};

export type LocalStorageKey = keyof typeof LOCAL_STORAGE;
