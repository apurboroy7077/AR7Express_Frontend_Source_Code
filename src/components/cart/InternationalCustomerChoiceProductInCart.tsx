import ar7id from "ar7id";
import FinalPrice from "../extra_functions/FinalPrice";
import { useDispatch, useSelector } from "react-redux";
import { singleProductDataType } from "../../models/ProductsData";
import { addToCart } from "../../configs/redux/cartSlice";
import { stateType } from "../../configs/redux/store";
import CheckIfExists from "../extra_functions/CheckIfExists";
type propsType = {
  data: singleProductDataType;
};
const InternationalCustomerChoiceProductInCart = (props: propsType) => {
  let dispatch = useDispatch();
  let { name, imageSrc, price, discountPercentage, theId } = props.data;
  let finalPrice = FinalPrice(price, discountPercentage);
  let cartProducts = useSelector(
    (state: stateType) => state.cartSliceReducer.productsQuantity
  );
  let doesExistsInCart = CheckIfExists(cartProducts, theId);
  let handleAddToCart = () => {
    dispatch(addToCart({ theId, quantity: 1 }));
  };
  return (
    <div
      className="min-w-[10rem] lg:w-[full] lg:flex gap-3 items-center"
      key={ar7id()}
    >
      <div className=" mb-2 ">
        <img
          src={imageSrc}
          className="w-[10rem] h-[5rem] lg:min-w-[10vw] lg:max-w-[10vw] lg:h-[5vw] object-cover "
        />
      </div>
      <div className="lg:w-[10vw] ">
        <div className="font-medium text-[0.85rem]">{name}</div>
        <div>
          <sup className="lg:text-[0.7vw]">$</sup>
          <span className=" lg:text-[1.1vw] mr-[0.5vw] ">{finalPrice}</span>
        </div>
        <div>
          <span className="text-[0.80rem] opacity-70 font-medium">
            List Price: <span className=" line-through">{price}</span>
          </span>
        </div>
        <div>
          <span>
            {!doesExistsInCart && (
              <button
                className="text-xs bg-red-300 pt-1 pb-1 pl-2 pr-2 rounded-sm  active:scale-[0.90]"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            )}
            {doesExistsInCart && (
              <button className="text-xs bg-red-300 pt-1 pb-1 pl-2 pr-2 rounded-sm  active:scale-[0.90]">
                Added to Cart{" "}
                <i className="fa-regular fa-square-check fa-bounce" />
              </button>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InternationalCustomerChoiceProductInCart;
