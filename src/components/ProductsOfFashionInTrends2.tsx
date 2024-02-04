import ar7id from "ar7id";
import ProductCardOfFashionInTrends2 from "./ProductCardOfFashionInTrends2";
import GiveSpecificNumbersOfProductsData from "./extra_functions/GiveSpecificNumbersOfProductsData";

const ProductsOfFashionInTrends2 = () => {
  let productsData = GiveSpecificNumbersOfProductsData(4);
  return (
    <div className="grid grid-cols-2 gap-[1vw] mt-3">
      {productsData.map((productData) => {
        return (
          <ProductCardOfFashionInTrends2 key={ar7id()} data={productData} />
        );
      })}
    </div>
  );
};

export default ProductsOfFashionInTrends2;
