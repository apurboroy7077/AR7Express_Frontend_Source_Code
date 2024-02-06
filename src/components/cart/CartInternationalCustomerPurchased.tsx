import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ar7id from "ar7id";
import InternationalCustomerChoiceProductInCart from "./InternationalCustomerChoiceProductInCart";
import GiveSpecificNumbersOfProductsData from "../extra_functions/GiveSpecificNumbersOfProductsData";

let CartInternationalCustomerPurchased = () => {
  let productsData = GiveSpecificNumbersOfProductsData(6);
  return (
    <div className=" flex lg:flex-col gap-3 lg:gap-5 items-center overflow-x-auto pb-5">
      {productsData.map((datas) => {
        return (
          <InternationalCustomerChoiceProductInCart
            data={datas}
            key={ar7id()}
          />
        );
      })}
    </div>
  );
};

export default CartInternationalCustomerPurchased;
