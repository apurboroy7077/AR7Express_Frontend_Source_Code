import { productsData } from "../../models/ProductsData";
import GiveRequiredValue from "../extra_functions/GiveRequiredValue";

type propsType = {
  theId: string;
};
const CartLargerScreenProductImage = (props: propsType) => {
  let { theId } = props;
  let imageSrc = GiveRequiredValue(productsData, theId, "imageSrc") as string;
  return (
    <div className="  mb-2">
      <img
        src={imageSrc}
        className="min-w-[9rem] h-[9rem] object-cover bg-center"
      />
    </div>
  );
};

export default CartLargerScreenProductImage;
