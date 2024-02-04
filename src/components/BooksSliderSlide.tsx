import { useNavigate } from "react-router-dom";
import { singleProductDataType } from "../models/ProductsData";

type propsType = {
  data: singleProductDataType;
};
const BooksSliderSlide = (props: propsType) => {
  let { imageSrc, theId } = props.data;
  let navigate = useNavigate();
  let handleClickOnBook = () => {
    localStorage.setItem("ar7express_focused_product_id", theId);
    navigate("/single_product_details");
  };
  return (
    <div className="mr-5 ml-5 " onClick={handleClickOnBook}>
      <img className="w-[8vw]" src={imageSrc} />
    </div>
  );
};

export default BooksSliderSlide;
