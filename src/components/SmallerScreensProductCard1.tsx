import { singleProductDataType } from "../models/ProductsData";
type propsType = {
  data: singleProductDataType;
};
const SmallerScreensProductCard1 = (props: propsType) => {
  let { name, imageSrc } = props.data;
  let handleProductDivTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
  };
  return (
    <div
      className="bg-white min-w-[125px] rounded overflow-hidden shadow"
      onTouchEnd={handleProductDivTouchEnd}
    >
      <div className="p-2 text-nowrap text-sm font-medium">{name}</div>
      <div className="h-[130px] w-full">
        <img src={imageSrc} className="h-full w-full " />
      </div>
    </div>
  );
};

export default SmallerScreensProductCard1;
