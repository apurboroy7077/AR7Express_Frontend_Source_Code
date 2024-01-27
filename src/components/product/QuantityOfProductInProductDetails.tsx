import ar7id from "ar7id";

const QuantityOfProductInProductDetails = () => {
  return (
    <div className="mt-2 relative ">
      <span className="absolute top-[0.58rem] left-3 font-medium">
        Quantity:
      </span>
      <select className="border-[2px] border-[black]  w-full p-2 pl-[4.8rem] font-medium rounded ">
        {Array.from({ length: 10 }).map((_, i) => {
          return <option key={ar7id()}>{i}</option>;
        })}
      </select>
    </div>
  );
};

export default QuantityOfProductInProductDetails;
