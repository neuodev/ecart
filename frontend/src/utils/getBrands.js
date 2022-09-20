const getBrands = products => {
  const brands = {};
  let brandList = [];
  for (let i = 0; i < products.length; i++) {
    let brand = products[i].brand;
    if (brands[brand]) {
      brands[brand]++;
    } else {
      brands[brand] = 1;
    }
  }

  for (let brand in brands) {
    brandList.push({ brand, count: brands[brand] });
  }

  return brandList;
};

export default getBrands;
