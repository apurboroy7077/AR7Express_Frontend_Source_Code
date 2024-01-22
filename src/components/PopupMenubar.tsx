import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import TheBoldHr from "./TheBoldHr";
type propstype = {
  data: {
    isPopupMenuOpen: boolean;
  };
};
const PopupMenubar = (props: propstype) => {
  let portalContainer = document.getElementById("portal");
  // RETURN NULL IF PORTALCONTAINER IS NOT FOUND--------------------------------------------------------------------
  if (!portalContainer) {
    return null;
  }
  let handleClosePopupMenubar = () => {
    let menubar = document.getElementsByClassName("menubar")[0] as HTMLElement;
    // MOVING MENUBAR BACK TO LEFT--------------------------------------------------------------------------------------------------------------------
    menubar.style.left = "-100%";
    let backgroundDarkForMenubar = document.getElementsByClassName(
      "backgroundDarkForMenubar"
    )[0] as HTMLElement;
    // REMOVING LOW BRIGTHNESS DIV------------------------------------------------------------------------------------------------------------------------
    backgroundDarkForMenubar.style.opacity = "0";
    let rootDiv = document.getElementById("root") as HTMLDivElement;
    // Making Root Div Static Again so that people Can Scroll---------------------------------------------------------------------------------------------------------
    rootDiv.style.position = "static";
  };
  return ReactDOM.createPortal(
    <>
      {/* THIS IS THE MAIN BACKGROUND DARK FILTER DIV OF MENUBAR------------------------------------------------------------------- */}
      <div
        className="backgroundDarkForMenubar opacity-0 pointer-events-none transition-all duration-500 fixed top-0 left-0 right-0 bottom-0  "
        style={{ backgroundColor: "rgba(0, 0, 0, .7)" }}
      ></div>
      {/* THIS IS THE MAIN MENUBAR--------------------------------------------------------------------------------------------------------------- */}
      <div
        className={`menubar absolute w-[80vw] h-fit  top-0 left-[-100%] ease-in-out duration-500 transition-all`}
        style={{ boxShadow: "3px 3px 10px black" }}
      >
        <div className=" bg-slate-600  flex justify-end p-1">
          <i
            className="fa-solid fa-circle-xmark text-white text-[1.5rem]"
            onClick={handleClosePopupMenubar}
          />
        </div>
        <div className=" bg-slate-600  flex justify-end p-2 pr-3 text-[1.1rem] text-white">
          <Link to="/">
            Sign in <i className="fa-solid fa-user ml-1" />
          </Link>
        </div>
        <div className=" text-[1.5rem] text-white p-2 bg-slate-600 leading-3 font-bold">
          Browse
        </div>
        <div className=" text-[1.7rem] text-white p-2 bg-slate-600 leading-3 font-medium pb-[2rem]">
          <span className="ml-1">Amazon</span>
        </div>
        <div className="bg-white flex justify-between p-2 font-medium text-[1.1rem]">
          <div>
            <Link to="/">Amazon Home</Link>
          </div>
          <div>
            <Link to="/">
              <i className="fa-solid fa-house-chimney" />
            </Link>
          </div>
        </div>
        <TheBoldHr />
        <div className="bg-white  p-2 text-[1.1rem]">
          <div className="font-medium">
            <Link to="/">Trending</Link>
          </div>
          <div className="text-[0.9rem] font-medium opacity-90 mt-1 mb-1">
            <Link to="/">Movers & Shakers</Link>
          </div>
        </div>
        <TheBoldHr />
        <div className="bg-white  p-2 text-[1.1rem]">
          <div className="font-medium">
            <Link to="/">Top Departments</Link>
          </div>
          <div className="text-[0.9rem] font-medium opacity-90 mt-1 mb-1">
            <Link to="/">Home</Link>
          </div>
          <div className="text-[0.9rem] font-medium opacity-90 mt-1 mb-1">
            <Link to="/">Health & Household</Link>
          </div>
          <div className="text-[0.9rem] font-medium opacity-90 mt-1 mb-1">
            <Link to="/">Books</Link>
          </div>
        </div>
        <TheBoldHr />
        <div className="bg-white  p-2 text-[1.1rem]">
          <div className="font-medium">
            <Link to="/">Top Departments</Link>
          </div>
          <div className="text-[0.9rem] font-medium opacity-90 mt-1 mb-1">
            <Link to="/">Home</Link>
          </div>
          <div className="text-[0.9rem] font-medium opacity-90 mt-1 mb-1">
            <Link to="/">Health & Household</Link>
          </div>
          <div className="text-[0.9rem] font-medium opacity-90 mt-1 mb-1">
            <Link to="/">Books</Link>
          </div>
        </div>
        <TheBoldHr />
        <div className="bg-white  p-2 text-[1.1rem]">
          <div className="font-medium">
            <Link to="/">Settings</Link>
          </div>
          <div className="text-[0.9rem] font-medium opacity-90 mt-1 mb-1">
            <Link to="/">
              <i className="fa-solid fa-earth-asia mr-1" />
              Asia
            </Link>
          </div>
          <div className="text-[0.9rem] font-medium opacity-90 mt-1 mb-1 ">
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo/bangladesh.png"
                className=" inline w-5 mr-1"
              />
              Bangladesh
            </Link>
          </div>
        </div>
      </div>
    </>,
    portalContainer
  );
};

export default PopupMenubar;
