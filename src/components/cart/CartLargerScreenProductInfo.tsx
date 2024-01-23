import { Link } from "react-router-dom";
import CartProductButtonsForLargerScreens from "./CartProductButtonsForLargerScreens";

const CartLargerScreenProductInfo = () => {
  return (
    <div className="">
      <div className="text-sm font-medium mb-[0.15rem]">
        LG 34WP60C-B 34-Inch 21:9 Curved UltraWide QHD (3440x1440) VA Display
        with sRGB 99% Color Gamut and HDR 10, AMD FreeSync Premium and 3-Side
        Virtually Borderless Screen Curved QHD Tilt,Black
      </div>
      <div className="leading-[0.9rem] mb-[0.15rem]">
        <span className="text-[0.8rem] font-medium opacity-85">
          500+ bought in past month
        </span>
      </div>
      <div className="font-medium text-[0.80rem] text-green-700">
        <span>In Stock</span>
      </div>
      <div className="flex items-center">
        <span>
          <input type="checkbox" />
        </span>
        <span className="ml-1 text-sm font-medium">This is a Gift Gift</span>
        <span className="ml-1 text-sm font-medium text-green-700">
          <Link to="/">Learn More</Link>
        </span>
      </div>
      <CartProductButtonsForLargerScreens />
    </div>
  );
};

export default CartLargerScreenProductInfo;
