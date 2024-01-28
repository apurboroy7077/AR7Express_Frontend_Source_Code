import { Link } from "react-router-dom";

const ShippingAndImportFeeInfo = () => {
  return (
    <div className="font-medium mt-2">
      <span className="font-medium text-sm opacity-80 lg:opacity-100">
        {"$135.55 Shipping and Import fees in Bangladesh."}
      </span>
      <span className="ml-1 text-green-700 ">
        <Link to="/">Details</Link>
      </span>
    </div>
  );
};

export default ShippingAndImportFeeInfo;
