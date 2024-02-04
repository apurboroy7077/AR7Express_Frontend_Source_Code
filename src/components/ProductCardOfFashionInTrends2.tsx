import { useNavigate } from "react-router-dom";
import { singleProductDataType } from "../models/ProductsData";

type propsType = {
  data: singleProductDataType;
};
const ProductCardOfFashionInTrends2 = (props: propsType) => {
  let { name, imageSrc, theId } = props.data;
  let finalName = name;
  if (name.length > 15) {
    finalName = name.slice(0, 15);
  }
  let navigate = useNavigate();
  let handleClickOnProduct = () => {
    localStorage.setItem("ar7express_focused_product_id", theId);
    navigate("/single_product_details");
  };
  return (
    <div className=" w-full" onClick={handleClickOnProduct}>
      <div>
        <img src={imageSrc} className="rounded w-[15vw] h-[8vw] object-cover" />
      </div>
      <div className=" text-[1vw] font-medium text-nowrap">
        {finalName}
        {name.length > 15 && <>...</>}
      </div>
    </div>
  );
};

export default ProductCardOfFashionInTrends2;
