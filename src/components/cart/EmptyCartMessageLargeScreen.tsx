import { Link } from "react-router-dom";

const EmptyCartMessageLargeScreen = () => {
  let test = 0;
  if (test == 0) {
    return null;
  }
  return (
    <div className="mb-3 flex">
      <div className="w-[50%]">
        <div className=" flex justify-center">
          <img src="/images/logo/empty_cart.png" />
        </div>
      </div>
      <div className="flex items-center justify-center  w-[50%]">
        <div>
          <div className="text-center mt-1 mb-1">
            <span className="text-[1.35rem] font-bold ">
              Your Amazon Cart is Empty
            </span>
          </div>
          <div className="text-center mt-1 mb-1">
            <span className="text-[1.1rem] font-medium opacity-80">
              Good stuff goes in here
            </span>
          </div>
          <div className="text-center mt-1 mb-1">
            <span className="text-[1.1rem] font-medium text-green-800">
              <Link to="/">Shop today's deals</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCartMessageLargeScreen;
