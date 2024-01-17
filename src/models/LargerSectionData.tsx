import {
  computerGirlSectionData,
  diningSectionData,
  largeScreenSingleProductSectionData,
  largeScreenToySectionData,
  lunarNewYearSectionData,
  redShirtSectionData,
  shoesTrendsSectionData,
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
export { largerSectionData1, largerSectionData2 };
