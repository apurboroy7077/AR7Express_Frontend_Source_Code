import ar7id from "ar7id";
import SmallerScreensProductCard1 from "./SmallerScreensProductCard1";
import GiveSpecificNumbersOfProductsData from "./extra_functions/GiveSpecificNumbersOfProductsData";

let productsData = GiveSpecificNumbersOfProductsData(15);
const ProductsOfCarousel1 = () => {
  return (
    <div className="flex gap-3 overflow-x-auto absolute bottom-0 max-w-full">
      {productsData.map((data) => {
        return <SmallerScreensProductCard1 data={data} key={ar7id()} />;
      })}
    </div>
  );
};

export default ProductsOfCarousel1;
