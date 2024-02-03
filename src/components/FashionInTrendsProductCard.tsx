import { singleProductDataType } from "../models/ProductsData";

type propsType = {
  data: singleProductDataType;
};
const FashionInTrendsProductCard = (props: propsType) => {
  let { name, imageSrc } = props.data;
  return (
    <div className=" w-full">
      <div>
        <img
          src={imageSrc}
          className="rounded w-full h-[40vw] md:h-[27vw] object-cover"
        />
      </div>
      <div className=" text-sm font-medium">{name}</div>
    </div>
  );
};

export default FashionInTrendsProductCard;
