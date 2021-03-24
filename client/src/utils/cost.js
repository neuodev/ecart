export const calcTotal = (discount, price, qty) => {
  discount = Number(discount);
  price = Number(price);
  qty = Number(qty);
  const itemPrice = price - price * (discount / 100);
  const itemsPrice = qty * itemPrice;
  return Number(itemsPrice);
};
