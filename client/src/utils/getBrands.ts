import { Product } from "../types/product";

type BrandList = Array<{ brand: string; count: number }>;
const getBrands: (produts: Product[]) => BrandList = (products: Product[]) => {
  const brands = {};
  let brandList: BrandList = [];
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
