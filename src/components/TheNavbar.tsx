const TheNavbar = () => {
  return (
    <>
      <div className="the_navbar bg-slate-900 p-2 max-w-full">
        <div className="flex items-center justify-between   text-white">
          <div className="flex items-center">
            <div>
              <i className="fa-solid fa-bars text-3xl" />
            </div>
            <div className="ml-2">
              <i className="fa-brands fa-amazon text-3xl" />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-1xl">Sign in</div>
            <div>
              <i className="fa-regular fa-user text-2xl" />
            </div>
            <div>
              <i className="fa-solid fa-cart-shopping text-2xl" />
            </div>
          </div>
        </div>
        <div className="relative">
          <input className="p-1 w-full mt-1 rounded outline-none" />
          <i className="fa-solid fa-magnifying-glass absolute right-0 top-1 bg-red-500 p-2 active:scale-110 rounded cursor-pointer" />
        </div>
        <div>
          <div className="flex text-nowrap gap-5 text-white overflow-x-auto pt-2 pb-2 no-scrollbar">
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
      <div className="bg-slate-800 p-3 ">
        <div className="text-white flex items-center">
          <i className="fa-solid fa-location-dot mr-1 " />
          <span className="text-sm">Deliver to Bangladesh</span>
          <i className="fa-solid fa-chevron-down text-xs ml-1" />
        </div>
      </div>
    </>
  );
};

export default TheNavbar;
