const CartProductButtonsForLargerScreens = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-2">
      <div>
        <select
          className="pr-2 pl-2 pt-1 pb-1 text-xs font-medium rounded "
          style={{
            border: "1px solid black",
            boxShadow: "1px 1px 2px black",
          }}
        >
          <option>Qty</option>
          {Array.from({ length: 10 }).map((_, index) => {
            return <option>{index}</option>;
          })}
        </select>
      </div>
      <button
        className="pr-2 pl-2 pt-1 pb-1 text-xs font-medium rounded text-green-700 active:scale-[0.95]"
        style={{
          border: "0.5px solid black",
          boxShadow: "1px 1px 2px black",
        }}
      >
        Delete
      </button>
      <button
        className="pr-2 pl-2 pt-1 pb-1 text-xs font-medium rounded text-green-700 active:scale-[0.95]"
        style={{
          border: "0.5px solid black",
          boxShadow: "1px 1px 2px black",
        }}
      >
        Save for later
      </button>
      <button
        className="pr-2 pl-2 pt-1 pb-1 text-xs font-medium rounded text-green-700 active:scale-[0.95]"
        style={{
          border: "0.5px solid black",
          boxShadow: "1px 1px 2px black",
        }}
      >
        Compare with similar items
      </button>
    </div>
  );
};

export default CartProductButtonsForLargerScreens;
