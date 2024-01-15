const TopPicks = () => {
  return (
    <div className=" p-3 ">
      <div className=" font-bold">Top Picks for Bangladesh</div>

      {Array.from({ length: 3 }).map(() => {
        return (
          <div className="mt-3 ml-3">
            <div className="flex">
              <div className="min-w-[25%]">
                <img
                  src="/images/products/food_warmer.jpg"
                  className="w-full"
                />
              </div>
              <div className="ml-3">
                <div className=" text-sm text-xs font-medium">
                  VEVOR Commercial Food Warmer Display, 3 Tiers, 800W Pizza
                  Warmer w/ 3D Heat… Our favorite Toys
                </div>
                <div className="font-medium">$298.99</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopPicks;
