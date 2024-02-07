import { useSelector } from "react-redux";
import { stateType } from "../../configs/redux/store";
import CartProductLargeScreen from "./CartProductLargeScreen";
import ar7id from "ar7id";
import { useMemo } from "react";

const CartProductsOfLargeScreens = () => {
  let cartProducts = useSelector(
    (state: stateType) => state.cartSliceReducer.productsQuantity
  );
  let cartProductsCode = useMemo(() => {
    return (
      <>
        {cartProducts.map((product) => {
          let { theId } = product;
          return <CartProductLargeScreen key={ar7id()} theId={theId} />;
        })}
      </>
    );
  }, [cartProducts.length]);
  return <>{cartProductsCode}</>;
};

export default CartProductsOfLargeScreens;
