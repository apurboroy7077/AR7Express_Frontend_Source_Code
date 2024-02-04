import ar7id from "ar7id";
import { useNavigate } from "react-router-dom";
import { singleProductDataType } from "../../models/ProductsData";
type propsType = {
  data: singleProductDataType;
};
const ProductCard = (props: propsType) => {
  let { description, price, discountPercentage, imageSrc, theId } = props.data;
  let shortenedDescription = description.slice(0, 35);
  let priceAfterDiscount = price - (price / 100) * discountPercentage;
  priceAfterDiscount = Number(priceAfterDiscount.toFixed(2));
  let navigate = useNavigate();
  let handleClickOnProduct = () => {
    localStorage.setItem("ar7express_focused_product_id", theId);
    navigate("/single_product_details");
  };
  return (
    <div className="w-[15%]" key={ar7id()} onClick={handleClickOnProduct}>
      <div className=" mb-2">
        <img
          src={imageSrc}
          className="w-full h-[11vw] object-cover bg-center cursor-pointer"
        />
      </div>
      <div className=" leading-[1.5vw] ">
        <span className=" bg-red-800 text-[0.87vw] p-[0.2vw] pr-[0.5vw] pl-[0.5vw] mr-[0.3vw] text-white cursor-pointer">
          {discountPercentage}% off
        </span>
        <span className=" text-red-800 font-medium text-[0.87vw] cursor-pointer">
          Deal
        </span>
      </div>
      <div>
        <sup className="text-[0.7vw] cursor-pointer">$</sup>
        <span className=" text-[1.1vw] mr-[0.5vw] cursor-pointer">
          {priceAfterDiscount}
        </span>
        <span className="text-[0.83vw] opacity-70 font-medium cursor-pointer">
          List Price:{" "}
          <span className=" line-through cursor-pointer">${price}</span>
        </span>
      </div>
      <div className="font-medium text-[0.85vw] cursor-pointer">
        {shortenedDescription}...
      </div>
    </div>
  );
};

export default ProductCard;
