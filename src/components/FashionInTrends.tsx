import { Link } from "react-router-dom";
import FashionInTrendsProducts from "./FashionInTrendsProducts";
type propsType = {
  data: { title: string; productName: string; imageSrc: string };
};
const FashionInTrends = (props: propsType) => {
  let { title } = props.data;
  return (
    <div className="p-3">
      <div className="font-bold text-base md:text-[2vw]">{title}</div>
      <FashionInTrendsProducts />
      <div className="mt-2">
        <Link to="/" className="font-medium text-sm text-green-700">
          Shop More
        </Link>
      </div>
    </div>
  );
};

export default FashionInTrends;
