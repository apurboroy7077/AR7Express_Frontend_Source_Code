import ar7id from "ar7id";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
type propsType = {
  data: { title: string; productName: string; imageSrc: string };
};
const FashionInTrends = (props: propsType) => {
  let { title, productName, imageSrc } = props.data;
  let [arrowLength, setArrowLength] = useState(4);
  // SETTING THE NUMBER OF PRODUCTS ACCORDING TO SCREEN SIZE--------------------------------------------------------------------------------------------------
  let handleResize = () => {
    if (window.innerWidth > 767) {
      console.log(window.innerWidth);
      setArrowLength(6);
    } else {
      setArrowLength(4);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);
  return (
    <div className="p-3">
      <div className="font-bold text-base md:text-[2vw]">{title}</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
        {Array.from({ length: arrowLength }).map(() => {
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
