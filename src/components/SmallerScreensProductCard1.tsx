import { useNavigate } from "react-router-dom";
import { singleProductDataType } from "../models/ProductsData";
type propsType = {
  data: singleProductDataType;
};
const SmallerScreensProductCard1 = (props: propsType) => {
  let { name, imageSrc, theId } = props.data;
  let navigate = useNavigate();
  let handleProductDivTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
  };
  let handleClickOnProduct = () => {
    localStorage.setItem("ar7express_focused_product_id", theId);
    navigate("/single_product_details");
  };
  return (
    <div
      className="bg-white min-w-[125px] rounded overflow-hidden shadow"
      onTouchEnd={handleProductDivTouchEnd}
      onClick={handleClickOnProduct}
    >
      <div className="p-2 text-nowrap text-sm font-medium">{name}</div>
      <div className="h-[130px] w-full">
        <img src={imageSrc} className="h-full w-full " />
      </div>
    </div>
  );
};

export default SmallerScreensProductCard1;
