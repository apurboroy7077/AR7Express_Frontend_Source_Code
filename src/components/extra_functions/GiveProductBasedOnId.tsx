import { productsData } from "../../models/ProductsData";

const GiveProductBasedOnId = (theId: string) => {
  let product = productsData.filter((product) => theId == product.theId);
  let theProduct = product[0];
  return theProduct;
};

export default GiveProductBasedOnId;
