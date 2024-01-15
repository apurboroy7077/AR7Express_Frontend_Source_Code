import { useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div
        className=" text-center bg-slate-700 text-white pt-1 pb-2"
        onClick={handleGoToTop}
      >
        <div>
          <i className="fa-solid fa-circle-up" />
        </div>
        <div className="text-xs font-bold">TOP OF PAGE</div>
      </div>
      <div className="flex justify-around bg-slate-800 text-white pt-3 pb-3">
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
