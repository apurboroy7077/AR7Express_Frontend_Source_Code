import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import TheBoldHr from "./TheBoldHr";
import CloseMenubar from "./CloseMenubar";
import ar7id from "ar7id";
import React from "react";

const PopupMenubar = () => {
  let portalContainer = document.getElementById("portal");
  // RETURN NULL IF PORTALCONTAINER IS NOT FOUND--------------------------------------------------------------------
  if (!portalContainer) {
    return null;
  }
  let handleClosePopupMenubar = () => {
    CloseMenubar();
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
        className={`menubar absolute z-20 w-[80vw] lg:w-[30vw] h-fit  top-0 left-[-100%] ease-in-out duration-500 transition-all`}
        style={{ boxShadow: "3px 3px 10px black" }}
      >
        <div className=" bg-slate-600  flex justify-end p-1">
          <i
            className="fa-solid fa-circle-xmark text-white text-[1.5rem]"
            onClick={handleClosePopupMenubar}
          />
        </div>
        <div className=" bg-slate-600  flex justify-end p-2 pr-3 text-[1.1rem] text-white  lg:justify-start lg:text-[1.5vw] lg:pl-[2vw]">
          <Link to="/signin" onClick={handleClosePopupMenubar}>
            <i className="fa-solid fa-user mr-[0.7vw] hidden lg:inline-block" />
            Sign in <i className="fa-solid fa-user ml-1 lg:hidden" />
          </Link>
        </div>
        <div className=" text-[1.5rem] text-white p-2 bg-slate-600 leading-3 font-bold lg:hidden">
          Browse
        </div>
        <div className=" text-[1.7rem] text-white p-2 bg-slate-600 leading-3 font-medium pb-[2rem] lg:hidden">
          <span className="ml-1">Amazon</span>
        </div>
        <div className="bg-white flex justify-between p-2 font-medium text-[1.1rem] lg:hidden">
          <div>
            <Link to="/" onClick={handleClosePopupMenubar}>
              Amazon Home
            </Link>
          </div>
          <div>
            <Link to="/" onClick={handleClosePopupMenubar}>
              <i className="fa-solid fa-house-chimney" />
            </Link>
          </div>
        </div>
        <div className="lg:hidden">
          <TheBoldHr />
        </div>
        <div className="bg-white  p-2 text-[1.1rem] lg:text-[1.17vw] lg:pl-[2vw]">
          <div className="font-medium lg:text-[1.15vw]">
            <Link to="/">Trending</Link>
          </div>
          <div className="text-[0.9rem] font-medium opacity-90 mt-1 mb-1 lg:text-[0.95vw]">
            <Link to="/" onClick={handleClosePopupMenubar}>
              Movers & Shakers
            </Link>
          </div>
        </div>
        <TheBoldHr />
        {Array.from({ length: 6 }).map(() => {
          return (
            <React.Fragment key={ar7id()}>
              <div className="bg-white  p-2 text-[1.1rem] lg:pl-[2vw]">
                <div className="font-medium lg:text-[1.15vw]">
                  <Link to="/" onClick={handleClosePopupMenubar}>
                    Top Departments
                  </Link>
                </div>
                <div className="text-[0.9rem] font-medium opacity-90 mt-1 mb-1 lg:text-[0.95vw]">
                  <Link to="/" onClick={handleClosePopupMenubar}>
                    Home
                  </Link>
                </div>
                <div className="text-[0.9rem] font-medium opacity-90 mt-1 mb-1 lg:text-[0.95vw]">
                  <Link to="/" onClick={handleClosePopupMenubar}>
                    Health & Household
                  </Link>
                </div>
                <div className="text-[0.9rem] font-medium opacity-90 mt-1 mb-1 lg:text-[0.95vw]">
                  <Link to="/" onClick={handleClosePopupMenubar}>
                    Books
                  </Link>
                </div>
              </div>
              <TheBoldHr />
            </React.Fragment>
          );
        })}

        <div className="bg-white  p-2 text-[1.1rem] lg:pl-[2vw]">
          <div className="font-medium lg:text-[1.15vw]">
            <Link to="/" onClick={handleClosePopupMenubar}>
              Settings
            </Link>
          </div>
          <div className="text-[0.9rem] font-medium opacity-90 mt-1 mb-1 lg:text-[0.95vw]">
            <Link to="/" onClick={handleClosePopupMenubar}>
              <i className="fa-solid fa-earth-asia mr-1" />
              Asia
            </Link>
          </div>
          <div className="text-[0.9rem] font-medium opacity-90 mt-1 mb-1 lg:text-[0.95vw]">
            <Link
              to="/"
              onClick={handleClosePopupMenubar}
              className="flex items-center"
            >
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
