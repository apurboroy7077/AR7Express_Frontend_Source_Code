type propsType = {
  data: {
    price: number;
    discountPercentage: number;
  };
};
const PriceInfo = (props: propsType) => {
  let { price, discountPercentage } = props.data;
  let totalPrice = price - (price / 100) * discountPercentage;
  totalPrice = Number(totalPrice.toFixed(2));

  return (
    <div className="mt-2">
      <sup className="font-medium text-base">$</sup>
      <span className=" text-2xl">{totalPrice}</span>
      <span className="opacity-70 font-medium ml-2">
        List Price:{" "}
        <span className=" line-through cursor-pointer">${price}</span>
      </span>
    </div>
  );
};

export default PriceInfo;
