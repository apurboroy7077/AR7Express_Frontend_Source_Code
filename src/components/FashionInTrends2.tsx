import { Link } from "react-router-dom";
import ProductsOfFashionInTrends2 from "./ProductsOfFashionInTrends2";
type propsType = {
  data: { title: string; productName: string; imageSrc: string };
};
const FashionInTrends2 = (props: propsType) => {
  let { title } = props.data;

  return (
    <div className="p-3 pl-7 pr-7 w-[23%] bg-white">
      <div className="font-bold text-[1.2vw] ">{title}</div>
      <ProductsOfFashionInTrends2 />
      <div className="mt-2">
        <Link to="/" className="font-medium text-[0.9vw] text-green-700">
          Shop More
        </Link>
      </div>
    </div>
  );
};

export default FashionInTrends2;
