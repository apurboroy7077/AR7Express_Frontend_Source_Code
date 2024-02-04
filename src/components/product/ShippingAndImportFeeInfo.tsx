import { Link } from "react-router-dom";
type propsType = {
  data: number;
};
const ShippingAndImportFeeInfo = (props: propsType) => {
  let price = props.data;
  // Shipping Fee will be always 3 times less than the original price
  let shippingFee = price / 3;
  shippingFee = Number(shippingFee.toFixed(2));
  return (
    <div className="font-medium mt-2">
      <span className="font-medium text-sm opacity-80 lg:opacity-100">
        {`$${shippingFee} Shipping and Import fees in Bangladesh.`}
      </span>
      <span className="ml-1 text-green-700 ">
        <Link to="/">Details</Link>
      </span>
    </div>
  );
};

export default ShippingAndImportFeeInfo;
