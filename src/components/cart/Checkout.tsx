import { useSelector } from "react-redux";
import { stateType } from "../../configs/redux/store";

const Checkout = () => {
  let cartProducts = useSelector(
    (state: stateType) => state.cartSliceReducer.productsQuantity
  );
  let itemsNumber = cartProducts.length;
  if (itemsNumber < 1) {
    return null;
  }
  return (
    <div className="mt-1 mb-1 sticky top-0 z-20 bg-white p-2">
      <button className=" bg-red-300 w-full p-3 rounded font-medium">
        Proceed to Checkout ({itemsNumber} items)
      </button>
    </div>
  );
};

export default Checkout;
