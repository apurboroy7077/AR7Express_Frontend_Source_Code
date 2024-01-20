import {
  computerGirlSectionData,
  digitalWatchData,
  diningSectionData,
  gamingMerchandiseData,
  largeScreenSingleProductSectionData,
  largeScreenToySectionData,
  lunarNewYearSectionData,
  outdoorDecorationData,
  redShirtSectionData,
  shoesTrendsSectionData,
  videoGameData,
} from "./TrendSectionData";

let largerSectionData1 = [
  {
    isSingleProduct: true,
    data: largeScreenToySectionData,
  },
  {
    isSingleProduct: true,
    data: largeScreenSingleProductSectionData,
  },
  {
    isSingleProduct: false,
    data: largeScreenSingleProductSectionData,
  },
  {
    isSingleProduct: false,
    data: shoesTrendsSectionData,
  },
];
let largerSectionData2 = [
  {
    isSingleProduct: false,
    data: redShirtSectionData,
  },
  {
    isSingleProduct: false,
    data: diningSectionData,
  },
  {
    isSingleProduct: true,
    data: lunarNewYearSectionData,
  },
  {
    isSingleProduct: true,
    data: computerGirlSectionData,
  },
];
let largerSectionData3 = [
  {
    isSingleProduct: true,
    data: digitalWatchData,
  },
  {
    isSingleProduct: false,
    data: outdoorDecorationData,
  },
  {
    isSingleProduct: true,
    data: videoGameData,
  },
  {
    isSingleProduct: false,
    data: gamingMerchandiseData,
  },
];
export { largerSectionData1, largerSectionData2, largerSectionData3 };
