const FinalPrice = (originalPrice: number, discountPercentage: number) => {
  let finalPrice = originalPrice - (originalPrice / 100) * discountPercentage;
  finalPrice = Number(finalPrice.toFixed(2));
  return finalPrice;
};

export default FinalPrice;
