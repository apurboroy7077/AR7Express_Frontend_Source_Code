import CartSectionForSmallerScreen from "./CartSectionForSmallerScreen";
import CartSectionForBiggerScreens from "./CartSectionForBiggerScreens";
import { useSelector } from "react-redux";
import { stateType } from "../../configs/redux/store";

const CartSection = () => {
  let screenSize = useSelector(
    (state: stateType) => state.screenSize.screenWidth
  );
  return (
    <>
      {screenSize < 1024 && <CartSectionForSmallerScreen />}
      {screenSize > 1023 && <CartSectionForBiggerScreens />}
    </>
  );
};

export default CartSection;
