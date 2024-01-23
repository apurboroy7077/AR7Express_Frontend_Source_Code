const CartButtons = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <div>
        <button
          className="pr-4 pl-4 pb-1 font-medium bg-slate-300 text-[1.2rem] rounded-l-md"
          style={{ border: "0.2px solid grey" }}
        >
          -
        </button>
        <button
          className="pr-4 pl-4 pb-1 font-medium  text-[1.2rem] text-green-700"
          style={{ border: "0.2px solid grey" }}
        >
          3
        </button>
        <button
          className="pr-4 pl-4 pb-1 font-medium bg-slate-300 text-[1.2rem] rounded-r-md"
          style={{ outline: "0.2px solid grey" }}
        >
          +
        </button>
      </div>

      <button
        className="pl-2 pr-2 pt-1 pb-1 rounded text-sm  font-medium"
        style={{ border: "0.5px solid black", boxShadow: "1px 1px 2px black" }}
      >
        Delete
      </button>
      <button
        className="pl-2 pr-2 pt-1 pb-1 rounded text-sm  font-medium"
        style={{ border: "0.5px solid black", boxShadow: "1px 1px 2px black" }}
      >
        Save for later
      </button>
      <button
        className="pl-2 pr-2 pt-1 pb-1 rounded text-sm  font-medium"
        style={{ border: "0.5px solid black", boxShadow: "1px 1px 2px black" }}
      >
        Compare with similar items
      </button>
    </div>
  );
};

export default CartButtons;
