import {
  largeScreenClothSectionData,
  largeScreenSingleProductSectionData,
  largeScreenToySectionData,
  shoesTrendsSectionData,
} from "../models/TrendSectionData";
import FashionInTrends2 from "./FashionInTrends2";
import FashionInTrends3 from "./FashionInTrends3";

const LargerScreenSection1 = () => {
  return (
    <div className="hidden lg:flex justify-around mt-5 mb-5">
      <FashionInTrends2 data={largeScreenClothSectionData} />
      <FashionInTrends3 data={largeScreenSingleProductSectionData} />
      <FashionInTrends3 data={largeScreenToySectionData} />
      <FashionInTrends2 data={shoesTrendsSectionData} />
    </div>
  );
};

export default LargerScreenSection1;
