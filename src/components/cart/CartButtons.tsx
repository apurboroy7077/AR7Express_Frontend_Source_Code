import { useDispatch, useSelector } from "react-redux";
import {
  decrementCartProductQuantity,
  deleteFromCart,
  incrementCartProductQuantity,
} from "../../configs/redux/cartSlice";
import { stateType } from "../../configs/redux/store";

type propsType = {
  data: {
    theId: string;
    quantity: number;
  };
};
const CartButtons = (props: propsType) => {
  let { theId } = props.data;
  let productsData = useSelector(
    (state: stateType) => state.cartSliceReducer.productsQuantity
  );
  let quantity = productsData.filter((product) => theId == product.theId)[0]
    .quantity;
  let dispatch = useDispatch();
  let handleIncreement = () => {
    dispatch(incrementCartProductQuantity(theId));
  };
  let handleDecrement = () => {
    dispatch(decrementCartProductQuantity(theId));
  };
  let handleDelete = () => {
    dispatch(deleteFromCart(theId));
  };
  return (
    <div className="flex flex-wrap gap-3">
      <div>
        <button
          className="pr-4 pl-4 pb-1 font-medium bg-slate-300 text-[1.2rem] rounded-l-md"
          style={{ border: "0.2px solid grey" }}
          onClick={handleDecrement}
        >
          -
        </button>
        <button
          className="pr-4 pl-4 pb-1 font-medium  text-[1.2rem] text-green-700"
          style={{ border: "0.2px solid grey" }}
        >
          {quantity}
        </button>
        <button
          className="pr-4 pl-4 pb-1 font-medium bg-slate-300 text-[1.2rem] rounded-r-md"
          style={{ outline: "0.2px solid grey" }}
          onClick={handleIncreement}
        >
          +
        </button>
      </div>

      <button
        className="pl-2 pr-2 pt-1 pb-1 rounded text-sm  font-medium"
        style={{ border: "0.5px solid black", boxShadow: "1px 1px 2px black" }}
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        className="pl-2 pr-2 pt-1 pb-1 rounded text-sm  font-medium"
        style={{ border: "0.5px solid black", boxShadow: "1px 1px 2px black" }}
      >
        Save for later
      </button>
      <button
        className="pl-2 pr-2 pt-1 pb-1 rounded text-sm  font-medium"
        style={{ border: "0.5px solid black", boxShadow: "1px 1px 2px black" }}
      >
        Compare with similar items
      </button>
    </div>
  );
};

export default CartButtons;
