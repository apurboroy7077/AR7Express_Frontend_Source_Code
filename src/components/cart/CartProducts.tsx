import { useSelector } from "react-redux";
import { stateType } from "../../configs/redux/store";
import CartProduct from "./CartProduct";
import ar7id from "ar7id";
import { useMemo } from "react";

const CartProducts = () => {
  let cartProductsData = useSelector(
    (state: stateType) => state.cartSliceReducer.productsQuantity
  );
  // Now the CartProductsCode will only rerender when the length of cartProductsData Changes--------------------------------------------------------------
  let CartProductsCode = useMemo(() => {
    return (
      <>
        {cartProductsData.map((product) => {
          return <CartProduct key={ar7id()} data={product} />;
        })}
      </>
    );
  }, [cartProductsData.length]);
  return <>{CartProductsCode}</>;
};

export default CartProducts;
