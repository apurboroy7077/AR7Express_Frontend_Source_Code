import ar7id from "ar7id";
import { Link } from "react-router-dom";
type propsType = {
  data: { title: string; productName: string; imageSrc: string };
};
const FashionInTrends3 = (props: propsType) => {
  let { title, productName, imageSrc } = props.data;

  return (
    <div className="p-3 pl-7 pr-7 w-[23%] bg-white">
      <div className="font-bold text-[1.2vw] ">{title}</div>
      <div className=" mt-3">
        {Array.from({ length: 1 }).map(() => {
          return (
            <div className=" w-full" key={ar7id()}>
              <div>
                <img
                  src={imageSrc}
                  className="rounded w-full h-[20vw] object-cover"
                />
              </div>
              {/* <div className=" text-[1vw] font-medium text-nowrap">
                {productName}
              </div> */}
            </div>
          );
        })}
      </div>
      <div className="mt-2">
        <Link to="/" className="font-medium text-[0.9vw] text-green-700">
          Shop More
        </Link>
      </div>
    </div>
  );
};

export default FashionInTrends3;
