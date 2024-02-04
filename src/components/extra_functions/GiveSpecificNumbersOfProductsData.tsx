import { productsData } from "../../models/ProductsData";
let data = [
  ...productsData,
  ...productsData,
  ...productsData,
  ...productsData,
  ...productsData,
  ...productsData,
];
let GiveSpecificNumbersOfProductsData = (n: number) => {
  let processedData = [];
  for (let i = 0; i < n; i++) {
    let index = Math.floor(Math.random() * data.length);
    let choosenItem = data[index];
    processedData.push(choosenItem);
  }
  return processedData;
};
let GiveSpecificNumbersOfProductsDataFromCategory = (
  n: number,
  theCategory: string
) => {
  let processedData = [];
  let categoryData = data.filter((product) => product.category == theCategory);
  for (let i = 0; i < n; i++) {
    let index = Math.floor(Math.random() * categoryData.length);
    let choosenItem = categoryData[index];
    processedData.push(choosenItem);
  }
  return processedData;
};

export default GiveSpecificNumbersOfProductsData;
export { GiveSpecificNumbersOfProductsDataFromCategory };
