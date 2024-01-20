import { useEffect } from "react";
import { Link } from "react-router-dom";
import TheHr from "./TheHr";

const TheFooter = () => {
  let navbar: HTMLElement | undefined;
  useEffect(() => {
    navbar = document.getElementsByClassName("the_navbar")[0] as HTMLElement;
  });
  let handleGoToTop = () => {
    if (navbar) {
      navbar.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {/* FOR BOTH SCREENS------------------------------------------------------------------------------------------------------------------ */}
      <div
        className=" text-center bg-slate-700 text-white pt-1 pb-2 lg:text-[1vw]"
        onClick={handleGoToTop}
      >
        <div>
          <i className="fa-solid fa-circle-up" />
        </div>
        <div className="text-xs font-bold lg:text-[0.7vw]">TOP OF PAGE</div>
      </div>
      {/* FOR SMALLER SCREENS-------------------------------------------------------------------------------------------------- */}
      <div className="flex justify-around bg-slate-800 text-white pt-3 pb-3 lg:hidden ">
        <div className="w-2/5 flex flex-col gap-3">
          <div>
            <Link to="/">Amazon.com</Link>
          </div>
          <div>
            <Link to="/">Your Lists</Link>
          </div>
          <div>
            <Link to="/">Find a Gift</Link>
          </div>
          <div>
            <Link to="/">Browsing History</Link>
          </div>
          <div>
            <Link to="/">Returns</Link>
          </div>
        </div>
        <div className="w-2/5 flex flex-col gap-3">
          <div>
            <Link to="/">Your Orders</Link>
          </div>
          <div>
            <Link to="/">Gift Cards & Registry</Link>
          </div>
          <div>
            <Link to="/">Your Account</Link>
          </div>
          <div>
            <Link to="/">Start Selling with Amazon</Link>
          </div>
          <div>
            <Link to="/">Recalls and Product Safety Alerts</Link>
          </div>
          <div>
            <Link to="/">Customer Service</Link>
          </div>
        </div>
      </div>

      {/* FOR BIGGER SCREENS----------------------------------------------------------------------------------------------------------------- */}
      <div className="hidden lg:flex justify-around bg-slate-800 text-white pt-3 pb-3 text-[1vw] font-medium">
        <div className="w-[10vw] flex flex-col gap-3 ">
          <div>
            <Link to="/">Amazon.com</Link>
          </div>
          <div>
            <Link to="/">Your Lists</Link>
          </div>
          <div>
            <Link to="/">Find a Gift</Link>
          </div>
          <div>
            <Link to="/">Browsing History</Link>
          </div>
          <div>
            <Link to="/">Returns</Link>
          </div>
        </div>
        <div className="w-[10vw] flex flex-col gap-3">
          <div>
            <Link to="/">Your Orders</Link>
          </div>
          <div>
            <Link to="/">Gift Cards & Registry</Link>
          </div>
          <div>
            <Link to="/">Your Account</Link>
          </div>
          <div>
            <Link to="/">Start Selling with Amazon</Link>
          </div>
          <div>
            <Link to="/">Recalls and Product Safety Alerts</Link>
          </div>
          <div>
            <Link to="/">Customer Service</Link>
          </div>
        </div>
        <div className="w-[10vw] flex flex-col gap-3">
          <div>
            <Link to="/">Amazon.com</Link>
          </div>
          <div>
            <Link to="/">Your Lists</Link>
          </div>
          <div>
            <Link to="/">Find a Gift</Link>
          </div>
          <div>
            <Link to="/">Browsing History</Link>
          </div>
          <div>
            <Link to="/">Returns</Link>
          </div>
        </div>
        <div className="w-[10vw] flex flex-col gap-3">
          <div>
            <Link to="/">Your Orders</Link>
          </div>
          <div>
            <Link to="/">Gift Cards & Registry</Link>
          </div>
          <div>
            <Link to="/">Your Account</Link>
          </div>
          <div>
            <Link to="/">Start Selling with Amazon</Link>
          </div>
          <div>
            <Link to="/">Recalls and Product Safety Alerts</Link>
          </div>
          <div>
            <Link to="/">Customer Service</Link>
          </div>
        </div>
      </div>
      <div className="bg-[#3A4553] h-[2px]"></div>
      <div className="bg-slate-800 p-[3vw] flex justify-center">
        <div className="flex items-center gap-[3vw]">
          <div className="text-white text-[2.3vw]">
            <i className="fa-brands fa-amazon " />
          </div>
          <div className="text-white flex text-[0.9vw] gap-[1vw] ">
            <div className="border-white border-[0.1vw] p-[0.3vw] pl-[1vw] pr-[3vw] relative rounded  flex items-center">
              <i className="fa-solid fa-globe mr-[0.5vw]" /> English{" "}
              <i className="fa-solid fa-caret-up absolute top-[0.6vw] right-[0.5vw]" />
              <i className="fa-solid fa-caret-down absolute top-[1.1vw] right-[0.5vw]" />
            </div>
            <div className="border-white border-[0.1vw] p-[0.3vw] pl-[1vw] pr-[1vw] relative rounded  flex items-center">
              <i className="fa-solid fa-hand-holding-dollar mr-[0.5vw]" /> USD -
              U.S Dollar
            </div>
            <div className="border-white border-[0.1vw] p-[0.3vw] pl-[1vw] pr-[1vw] relative rounded flex items-center">
              <img
                src="/images/logo/bangladesh.png"
                className="h-[2vw] mr-[0.2vw]"
              />{" "}
              English
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-slate-950 text-white pt-5 pb-5">
        <div className="flex justify-around text-sm pr-7 pl-7 ">
          <div>
            <i className="fa-solid fa-globe" /> English
          </div>
          <div>$USD - U.S Dollar</div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <div>
            <img src="/images/logo/bangladesh.png" className="w-7" />
          </div>
          &nbsp;
          <div className="text-sm">The Republic of Bangladesh</div>
        </div>
        <div className="text-center mt-3">
          Already a Customer? <Link to="/">Sign in</Link>
        </div>
        <div className="text-xs text-center mt-5">
          <Link to="/">Conditions of Use</Link> &nbsp;&nbsp;&nbsp;
          <Link to="/">Privacy Notice</Link>
        </div>
        <div className="text-center text-xs mt-1">Your Ads Privacy Choices</div>
        <div className="text-center text-xs mt-3 font-sans">
          @ 1996-2024, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </>
  );
};

export default TheFooter;
