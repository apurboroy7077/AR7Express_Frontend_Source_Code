import ar7id from "ar7id";
import { Link } from "react-router-dom";
type propsType = {
  data: { title: string; productName: string; imageSrc: string };
};
const FashionInTrends = (props: propsType) => {
  let { title, productName, imageSrc } = props.data;

  return (
    <div className="p-3">
      <div className="font-bold text-base ">{title}</div>
      <div className="grid grid-cols-2 gap-3 mt-3">
        {Array.from({ length: 4 }).map(() => {
          return (
            <div className=" w-full" key={ar7id()}>
              <div>
                <img src={imageSrc} className="rounded w-full" />
              </div>
              <div className=" text-sm font-medium">{productName}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-2">
        <Link to="/" className="font-medium text-sm text-green-700">
          Shop More
        </Link>
      </div>
    </div>
  );
};

export default FashionInTrends;
