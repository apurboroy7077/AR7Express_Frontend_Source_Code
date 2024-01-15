import ar7id from "ar7id";

type propsType = {
  data: {
    title: string;
    productDescription: string;
    price: string;
    imageSrc: string;
  };
};

const TopPicks = (props: propsType) => {
  let { title, productDescription, price, imageSrc } = props.data;
  return (
    <div className=" p-3 ">
      <div className=" font-bold">{title}</div>

      {Array.from({ length: 3 }).map(() => {
        return (
          <div className="mt-3 ml-3" key={ar7id()}>
            <div className="flex">
              <div className="min-w-[25%]">
                <img src={imageSrc} className="w-full" />
              </div>
              <div className="ml-3">
                <div className="  text-xs font-medium">
                  {productDescription}
                </div>
                <div className="font-medium">{price}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopPicks;
