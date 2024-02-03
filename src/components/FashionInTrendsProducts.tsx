import { useSelector } from "react-redux";
import { rootType } from "../configs/redux/screenSize";
import ar7id from "ar7id";
import FashionInTrendsProductCard from "./FashionInTrendsProductCard";
import GiveSpecificNumbersOfProductsData from "./extra_functions/GiveSpecificNumbersOfProductsData";

const FashionInTrendsProducts = () => {
  let arrayLength: number;
  let screenSize = useSelector(
    (state: rootType) => state.screenSize.screenWidth
  );
  if (screenSize > 767) {
    arrayLength = 6;
  } else {
    arrayLength = 4;
  }
  let productsData = GiveSpecificNumbersOfProductsData(arrayLength);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
      {productsData.map((productData) => {
        return <FashionInTrendsProductCard key={ar7id()} data={productData} />;
      })}
    </div>
  );
};

export default FashionInTrendsProducts;
