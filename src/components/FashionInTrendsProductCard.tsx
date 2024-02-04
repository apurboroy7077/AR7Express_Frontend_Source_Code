import { useNavigate } from "react-router-dom";
import { singleProductDataType } from "../models/ProductsData";

type propsType = {
  data: singleProductDataType;
};
const FashionInTrendsProductCard = (props: propsType) => {
  let { name, imageSrc, theId } = props.data;
  let navigate = useNavigate();
  let handleProductClick = () => {
    localStorage.setItem("ar7express_focused_product_id", theId);
    navigate("/single_product_details");
  };
  return (
    <div className=" w-full" onClick={handleProductClick}>
      <div>
        <img
          src={imageSrc}
          className="rounded w-full h-[40vw] md:h-[27vw] object-cover"
        />
      </div>
      <div className=" text-sm font-medium">{name}</div>
    </div>
  );
};

export default FashionInTrendsProductCard;
