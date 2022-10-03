import { ICartItem, ShippingMethod } from "../types";

export const calcTotal = (discount: number, price: number, qty: number) => {
  discount = Number(discount);
  price = Number(price);
  qty = Number(qty);
  const itemPrice = price - price * (discount / 100);
  const itemsPrice = qty * itemPrice;
  return itemsPrice;
};

export const calcTotalPrice = (
  products: ICartItem[],
  shppingMethod: ShippingMethod | null
) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    let { discount, price, qty } = products[i];
    const itemPrice = price - price * (discount / 100);
    const itemsPrice = qty * itemPrice;
    total += itemsPrice;
  }

  if (shppingMethod) {
    total += shppingMethod.cost;
  }
  return total;
};

export const calcSubTotal = (products: ICartItem[]) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    let { discount, price, qty } = products[i];
    const itemPrice = price - price * (discount / 100);
    const itemsPrice = qty * itemPrice;
    total += itemsPrice;
  }

  return total;
};
