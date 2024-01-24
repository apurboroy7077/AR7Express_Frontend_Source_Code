const CartCheckoutSectionLargeScreen = () => {
  return (
    <div className=" bg-white p-[1vw] ">
      <div className="">
        <span className="text-[1.1rem]">Subtotal (6 items): </span>
        <span className="font-bold text-[1.1rem]">$2,030.94</span>
      </div>
      <div className="flex items-center mb-[0.7rem]">
        <span>
          <input type="checkbox" />
        </span>
        <span className="ml-1 text-xs font-medium">
          This Order Contains a Gift
        </span>
      </div>
      <div className="mt-1 mb-1 sticky ">
        <button className=" bg-red-300 w-full p-3 rounded font-medium">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartCheckoutSectionLargeScreen;
