type propsType = {
  data: number;
};
const PriceInfoForLargerScreens = (props: propsType) => {
  let price = props.data;
  let wholeNumber = Math.floor(price);
  let decimalPart = Math.round((price - wholeNumber) * 100);
  return (
    <div>
      <sup className="font-medium text-sm">$</sup>
      <span className=" text-2xl">{wholeNumber}</span>
      <sup className="font-medium text-sm">{decimalPart}</sup>
    </div>
  );
};

export default PriceInfoForLargerScreens;
