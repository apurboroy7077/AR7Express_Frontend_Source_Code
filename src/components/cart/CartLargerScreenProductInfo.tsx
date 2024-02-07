import { Link } from "react-router-dom";
import CartProductButtonsForLargerScreens from "./CartProductButtonsForLargerScreens";
import GiveProductBasedOnId from "../extra_functions/GiveProductBasedOnId";
type propsType = {
  theId: string;
};
const CartLargerScreenProductInfo = (props: propsType) => {
  let { theId } = props;
  let productsData = GiveProductBasedOnId(theId);
  let { description } = productsData;
  return (
    <div className="">
      <div className="text-sm font-medium mb-[0.15rem]">{description} </div>
      <div className="leading-[0.9rem] mb-[0.15rem]">
        <span className="text-[0.8rem] font-medium opacity-85">
          500+ bought in past month
        </span>
      </div>
      <div className="font-medium text-[0.80rem] text-green-700">
        <span>In Stock</span>
      </div>
      <div className="flex items-center">
        <span>
          <input type="checkbox" />
        </span>
        <span className="ml-1 text-sm font-medium">This is a Gift Gift</span>
        <span className="ml-1 text-sm font-medium text-green-700">
          <Link to="/">Learn More</Link>
        </span>
      </div>
      <CartProductButtonsForLargerScreens theId={theId} />
    </div>
  );
};

export default CartLargerScreenProductInfo;
