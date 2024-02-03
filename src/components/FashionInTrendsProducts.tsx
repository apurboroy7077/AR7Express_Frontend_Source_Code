import { useSelector } from "react-redux";
import { rootType } from "../configs/redux/screenSize";
import ar7id from "ar7id";
import FashionInTrendsProductCard from "./FashionInTrendsProductCard";

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

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
      {Array.from({ length: arrayLength }).map(() => {
        return <FashionInTrendsProductCard key={ar7id()} />;
      })}
    </div>
  );
};

export default FashionInTrendsProducts;
