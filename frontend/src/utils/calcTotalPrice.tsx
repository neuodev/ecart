export const calcTotalPrice = (products, shppingMethod) => {
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
  return Number(total);
};
