import ar7id from "ar7id";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantityOfProductsInProductDetails } from "../../configs/redux/productQuantityInProductDetails";
import { stateType } from "../../configs/redux/store";
import { useEffect, useState } from "react";
type propsType = {
  data: string;
};
const QuantityOfProductInProductDetails = (props: propsType) => {
  let theId = props.data;
  let doesExist = false;
  let productsInCart = useSelector(
    (state: stateType) => state.cartSliceReducer.productsQuantity
  );
  let matchingProductsInCart = productsInCart.filter(
    (product) => product.theId == theId
  );
  if (matchingProductsInCart.length > 0) {
    doesExist = true;
  }
  let [quantity, setQuantity] = useState(0);

  let quantityOfProducts = useSelector(
    (state: stateType) =>
      state.updateQuantityOfProductsInProductDetails.quantityOfProducts
  );
  // First Time Rendering to Load any Data if it Exists-------------------------------------------
  useEffect(() => {
    let savedData = quantityOfProducts.filter((data) => data.theId == theId);
    if (savedData.length > 0) {
      setQuantity(savedData[0].quantity);
    }
  }, []);

  let dispatch = useDispatch();
  let handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let valueOfQuantity = e.target.value;
    let theQuantity = Number(valueOfQuantity);
    setQuantity(theQuantity);
    dispatch(
      updateQuantityOfProductsInProductDetails({ theId, quantity: theQuantity })
    );
  };
  // Checking If Already Exists on Cart or Not, Return if Exists----------------------------------------------------------------
  if (doesExist) {
    return null;
  }
  return (
    <div className="mt-2 relative ">
      <span className="absolute top-[0.58rem] left-3 font-medium">
        Quantity:
      </span>
      <select
        onChange={handleQuantityChange}
        value={quantity}
        className="border-[1px] border-[black]  w-full p-2 pl-[4.8rem] font-medium rounded "
      >
        {Array.from({ length: 10 }).map((_, i) => {
          return <option key={ar7id()}>{i}</option>;
        })}
      </select>
    </div>
  );
};

export default QuantityOfProductInProductDetails;
