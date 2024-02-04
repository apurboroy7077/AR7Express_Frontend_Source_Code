import ar7id from "ar7id";
import TopPicksProductCards from "./TopPicksProductCards";
import { GiveSpecificNumbersOfProductsDataFromCategory } from "./extra_functions/GiveSpecificNumbersOfProductsData";
let productsData = GiveSpecificNumbersOfProductsDataFromCategory(3, "topPicks");
const TopPicksProducts = () => {
  return (
    <div className="md:grid md:grid-cols-2">
      {productsData.map((productData) => {
        return <TopPicksProductCards key={ar7id()} data={productData} />;
      })}
    </div>
  );
};

export default TopPicksProducts;
