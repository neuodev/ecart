import { IProduct } from "../types";

export type BrandsList = Array<{ brand: string; count: number }>;

function getBrands(products: IProduct[]): BrandsList {
  const brands: {
    [key: string]: number;
  } = {};

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
}

export default getBrands;
