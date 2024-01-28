import { productsData } from "../../models/ProductsData";
let data = [...productsData, ...productsData, ...productsData];
const GiveSpecificNumbersOfProductsData = (n: number) => {
  let processedData = [];
  for (let i = 0; i < n; i++) {
    let index = Math.floor(Math.random() * data.length);
    let choosenItem = data[index];
    processedData.push(choosenItem);
  }
  return processedData;
};

export default GiveSpecificNumbersOfProductsData;
