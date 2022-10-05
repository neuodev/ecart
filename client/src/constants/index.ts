export const LOCAL_STORAGE = {
  userInfo: "USER_INFO",
  cartItems: "CART_ITEMS",
  shippingAddr: "SHIPPING_ADDRESS",
  paymentMethod: "PAYMENT_METHOD",
  shippingMethod: "SHIPPING_METHOD",
  wishlist: "WISHLIST",
};

export type LocalStorageKey = keyof typeof LOCAL_STORAGE;

// Number of letters to display in the default description view before
// clicking 'Read more'
export const DESC_NUM_OF_LETTERS = 100;
