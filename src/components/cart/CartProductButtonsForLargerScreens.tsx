import ar7id from "ar7id";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../configs/redux/store";
import GiveRequiredValue from "../extra_functions/GiveRequiredValue";
import { addToCart, deleteFromCart } from "../../configs/redux/cartSlice";
type propsType = {
  theId: string;
};
const CartProductButtonsForLargerScreens = (props: propsType) => {
  let dispatch = useDispatch();
  let { theId } = props;
  let cartProductsData = useSelector(
    (state: stateType) => state.cartSliceReducer.productsQuantity
  );
  let quantity = GiveRequiredValue(
    cartProductsData,
    theId,
    "quantity"
  ) as number;
  let handleUpdateQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let newQuantityString = e.target.value;
    let newQuantity = Number(newQuantityString);
    dispatch(addToCart({ theId, quantity: newQuantity }));
  };
  let handleDelete = () => {
    dispatch(deleteFromCart(theId));
  };
  return (
    <div className="flex flex-wrap gap-3 mt-2">
      <div>
        <select
          className="pr-2 pl-2 pt-1 pb-1 text-xs font-medium rounded "
          style={{
            border: "1px solid black",
            boxShadow: "1px 1px 2px black",
          }}
          value={quantity}
          onChange={handleUpdateQuantity}
        >
          <option>Qty</option>
          {Array.from({ length: 10 }).map((_, index) => {
            return <option key={ar7id()}>{index}</option>;
          })}
        </select>
      </div>
      <button
        className="pr-2 pl-2 pt-1 pb-1 text-xs font-medium rounded text-green-700 active:scale-[0.95]"
        style={{
          border: "0.5px solid black",
          boxShadow: "1px 1px 2px black",
        }}
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        className="pr-2 pl-2 pt-1 pb-1 text-xs font-medium rounded text-green-700 active:scale-[0.95]"
        style={{
          border: "0.5px solid black",
          boxShadow: "1px 1px 2px black",
        }}
      >
        Save for later
      </button>
      <button
        className="pr-2 pl-2 pt-1 pb-1 text-xs font-medium rounded text-green-700 active:scale-[0.95]"
        style={{
          border: "0.5px solid black",
          boxShadow: "1px 1px 2px black",
        }}
      >
        Compare with similar items
      </button>
    </div>
  );
};

export default CartProductButtonsForLargerScreens;
