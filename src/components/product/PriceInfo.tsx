const PriceInfo = () => {
  return (
    <div className="mt-2">
      <sup className="font-medium text-base">$</sup>
      <span className=" text-2xl">{99}</span>
      <span className="opacity-70 font-medium ml-2">
        List Price: <span className=" line-through cursor-pointer">${99}</span>
      </span>
    </div>
  );
};

export default PriceInfo;
