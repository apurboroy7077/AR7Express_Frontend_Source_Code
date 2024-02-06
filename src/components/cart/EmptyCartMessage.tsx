import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { stateType } from "../../configs/redux/store";

const EmptyCartMessage = () => {
  let cartProducts = useSelector(
    (state: stateType) => state.cartSliceReducer.productsQuantity
  );
  if (cartProducts.length > 0) {
    return null;
  }
  return (
    <div className="mb-3">
      <div className=" flex justify-center">
        <img src="/images/logo/empty_cart.png" />
      </div>
      <div className="text-center mt-1 mb-1">
        <span className="text-[1.2rem] font-bold ">
          Your Amazon Cart is Empty
        </span>
      </div>
      <div className="text-center mt-1 mb-1">
        <span className="font-medium opacity-80">Good stuff goes in here</span>
      </div>
      <div className="text-center mt-1 mb-1">
        <span className="font-medium text-green-800">
          <Link to="/">Shop today's deals</Link>
        </span>
      </div>
    </div>
  );
};

export default EmptyCartMessage;
