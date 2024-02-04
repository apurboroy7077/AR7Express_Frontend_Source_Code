import { useNavigate } from "react-router-dom";
import { singleProductDataType } from "../models/ProductsData";

type propsType = {
  data: singleProductDataType;
};
const TopPicksProductCards = (props: propsType) => {
  let { imageSrc, description, theId } = props.data;
  let finalDescription = description;
  if (description.length > 100) {
    finalDescription = description.slice(0, 100);
  }
  let navigate = useNavigate();
  let handleClickOnProduct = () => {
    localStorage.setItem("ar7express_focused_product_id", theId);
    navigate("/single_product_details");
  };
  return (
    <div className="mt-3 ml-3" onClick={handleClickOnProduct}>
      <div className="flex">
        <div className="min-w-[25%]">
          <img src={imageSrc} className="w-full" />
        </div>
        <div className="ml-3">
          <div className="  text-xs font-medium">
            {finalDescription}
            {description.length > 100 && <>...</>}
          </div>
          <div className="font-medium">{"$331"}</div>
        </div>
      </div>
    </div>
  );
};

export default TopPicksProductCards;
