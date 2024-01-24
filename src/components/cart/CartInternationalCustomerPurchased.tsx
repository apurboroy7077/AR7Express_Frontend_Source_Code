import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ar7id from "ar7id";
import InternationalCustomerChoiceProductInCart from "./InternationalCustomerChoiceProductInCart";
type propsType = {
  data: {
    name: string;
    description: string;
    price: number;
    discountPercentage: number;
    imageSrc: string;
  }[];
};
let CartInternationalCustomerPurchased = (props: propsType) => {
  let productsData = props.data;
  //PICKING RANDOM 6 PRODUCTS-------------------------------------------------------------------------------------------------------
  let random6Product = productsData.sort(() => Math.random() - 0.5);
  random6Product = random6Product.slice(0, 6);
  return (
    <div className=" flex lg:flex-col gap-3 lg:gap-5 items-center overflow-x-auto pb-5">
      {random6Product.map((datas) => {
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
