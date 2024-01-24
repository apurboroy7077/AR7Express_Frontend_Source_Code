import ar7id from "ar7id";

type propsType = {
  data: {
    name: string;
    imageSrc: string;
    price: number;
    discountPercentage: number;
  };
};

const InternationalCustomerChoiceProductInCart = (props: propsType) => {
  let { name, imageSrc, price, discountPercentage } = props.data;
  let priceAfterDiscount = price - (price / 100) * discountPercentage;
  return (
    <div
      className="min-w-[10rem] lg:w-[full] lg:flex gap-3 items-center"
      key={ar7id()}
    >
      <div className=" mb-2 ">
        <img
          src={imageSrc}
          className="w-[10rem] h-[5rem] lg:min-w-[10vw] lg:max-w-[10vw] lg:h-[5vw] object-cover "
        />
      </div>
      <div className="">
        <div className="font-medium text-[0.85rem]">{name}</div>
        <div>
          <sup className="lg:text-[0.7vw]">$</sup>
          <span className=" lg:text-[1.1vw] mr-[0.5vw] ">
            {priceAfterDiscount}
          </span>
        </div>
        <div>
          <span className="text-[0.80rem] opacity-70 font-medium">
            List Price: <span className=" line-through">{price}</span>
          </span>
        </div>
        <div>
          <span>
            <button className="text-xs bg-red-300 pt-1 pb-1 pl-2 pr-2 rounded-sm  active:scale-[0.90]">
              Add to Cart
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default InternationalCustomerChoiceProductInCart;
