const GiveFractionalValues = (price: number) => {
  let beforeFraction = Math.floor(price);
  let afterFraction = Math.floor((price - beforeFraction) * 100);
  let packaged = { beforeFraction, afterFraction };
  return packaged;
};

export default GiveFractionalValues;
