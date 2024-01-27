import PopupMenubar from "./PopupMenubar";
import OpenMenubar from "./OpenMenubar";
import { Link } from "react-router-dom";

const TheNavbar = () => {
  let handleSearchBarFocus = () => {
    let theBlackDiv = document.getElementsByClassName(
      "background_filter_black_div"
    )[0];
    theBlackDiv.classList.remove("hidden");
  };
  let handleSearchBarFocusOut = () => {
    let theBlackDiv = document.getElementsByClassName(
      "background_filter_black_div"
    )[0];
    theBlackDiv.classList.add("hidden");
  };
  let handleClickOnMenuIcon = () => {
    OpenMenubar();
  };
  let handleClickOnLargeScreenMenuIcon = () => {
    OpenMenubar();
  };
  return (
    <>
      <div className="the_navbar bg-slate-900 p-2 max-w-full overflow-hidden lg:p-3">
        <div className="flex items-center justify-between   text-white">
          <div className="flex items-center">
            <div className="lg:hidden">
              <i
                className="fa-solid fa-bars text-3xl cursor-pointer"
                onClick={handleClickOnMenuIcon}
              />
            </div>
            <div className="ml-2">
              <Link to="/">
                <i className="fa-brands fa-amazon text-3xl lg:text-4xl" />
              </Link>
            </div>
            <div className="text-white items-center hidden lg:flex ml-4">
              <i className="fa-solid fa-location-dot mr-1 " />
              <span className=" text-base text-nowrap">
                Deliver to{" "}
                <span className="font-medium text-lg">Bangladesh</span>
              </span>
              <i className="fa-solid fa-chevron-down text-xs ml-1" />
            </div>
          </div>
          {/* INPUT FOR BIG SIZE DEVICES----------------------------------------------------------------------------------------------------------------------------- */}
          <div className="relative w-full ml-3 mr-3 hidden lg:block">
            <input
              className="p-1 w-full mt-1 rounded outline-none text-black pt-2 pb-2 pl-[60px]"
              placeholder="Search Amazon"
              onFocus={handleSearchBarFocus}
              onBlur={handleSearchBarFocusOut}
            />
            <select className="text-black absolute bg-slate-300 left-0 top-[4px] rounded-l-lg p-[8.5px]">
              <option className="bg-white">Hi</option>
              <option className="bg-white">Hi</option>
            </select>
            <i className="fa-solid fa-magnifying-glass absolute right-0 top-1 bg-red-500 p-3 active:scale-110 rounded cursor-pointer" />
          </div>
          <div className="flex gap-3 items-center">
            {/* SMALL DEVICES SIGN IN-------------------------------------------------------------------------------------------------------------------- */}
            <div className="text-1xl text-nowrap lg:hidden active:scale-[0.9]">
              <Link to="/signin" className="active:scale-[0.9]">
                Sign in
              </Link>
            </div>
            {/* SMALL DEVICES USER ICON------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className="lg:hidden">
              <i className="fa-regular fa-user text-2xl" />
            </div>
            {/* LARGE DEVICES LANGUAGE BAR-----------------------------------------------------------------------------------------------------------------------------------------*/}
            <div className=" items-center min-w-fit hidden lg:flex ">
              <div>
                <img src="/images/logo/bangladesh.png" className="w-7" />
              </div>
              <div className="font-medium">Bangla</div>
            </div>
            {/* Sign in for Large Devices------------------------------------------------------------------------------------------------------------------------ */}
            <div className=" pl-5 pr-5 hidden lg:block">
              <div className="text-nowrap leading-[18px] font-medium">
                Hello, Sign In!
              </div>
              <div className="text-nowrap leading-[18px] font-bold text-lg">
                Account & Lists{" "}
                <i className="fa-solid fa-caret-down opacity-60" />
              </div>
            </div>
            {/* Return and Orders for Large Devices------------------------------------------------------------------------------------------------------------------------ */}
            <div className=" pl-5 pr-5  hidden lg:block">
              <div className="text-nowrap leading-[18px] font-medium">
                Returns
              </div>
              <div className="text-nowrap leading-[18px] font-bold text-lg">
                & Orders
              </div>
            </div>
            {/* CART ICON FOR ALL DEVICES------------------------------------------------------------------------------------------------------------------------------------------ */}
            <div className="lg:mr-10 ">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping text-2xl lg:text-4xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative lg:hidden">
          <input className="p-1 w-full mt-1 rounded outline-none" />
          <i className="fa-solid fa-magnifying-glass absolute right-0 top-1 bg-red-500 p-2 active:scale-110 rounded cursor-pointer" />
        </div>
        <div>
          <div className="flex text-nowrap gap-5 text-white overflow-x-auto pt-2 pb-2 no-scrollbar lg:hidden">
            <div>Deals</div>
            <div>Amazon Basics</div>
            <div>Deals</div>
            <div>Amazon Basics</div>
            <div>Deals</div>
            <div>Amazon Basics</div>
            <div>Deals</div>
            <div>Amazon Basics</div>
            <div>Deals</div>
            <div>Amazon Basics</div>
            <div>Deals</div>
            <div>Amazon Basics</div>
            <div>Deals</div>
            <div>Amazon Basics</div>
            <div>Deals</div>
            <div>Amazon Basics</div>
            <div>Deals</div>
            <div>Amazon Basics</div>
            <div>Deals</div>
            <div>Amazon Basics</div>
            <div>Deals</div>
            <div>Amazon Basics</div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 p-3 lg:hidden">
        <div className="text-white flex items-center">
          <i className="fa-solid fa-location-dot mr-1 " />
          <span className="text-sm">Deliver to Bangladesh</span>
          <i className="fa-solid fa-chevron-down text-xs ml-1" />
        </div>
      </div>
      <div>
        <div className="hidden text-nowrap gap-5 text-white p-2 pl-6 lg:flex bg-slate-800 text-lg font-medium items-center">
          <div>
            <i
              className="fa-solid fa-bars text-3xl cursor-pointer"
              onClick={handleClickOnLargeScreenMenuIcon}
            />
          </div>
          <div>Deals</div>
          <div>Amazon Basics</div>
          <div>Deals</div>
          <div>Amazon Basics</div>
          <div>Deals</div>
          <div>Amazon Basics</div>
          <div>Deals</div>
          <div>Amazon Basics</div>
        </div>
      </div>
      <PopupMenubar />
    </>
  );
};

export default TheNavbar;
