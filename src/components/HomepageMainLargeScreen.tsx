import {
  largerSectionData2,
  largerSectionData3,
} from "../models/LargerSectionData";
import { productsData } from "../models/ProductsData";
import BackgroundFilterBlack from "./BackgroundFilterBlack";
import BooksSliderForLargeScreens from "./BooksSliderForLargeScreens";
import HomepageCarouselLargeScreen from "./HomepageCarouselLargeScreen";
import LargerScreenSection1Type2 from "./LargerScreenSection1Type2";
import ProductCarousel3ForLargerScreens from "./ProductCarousel3ForLargerScreens";
import SignInMessage from "./SignInMessage";
import TheCarousal1 from "./TheCarousal1";

const HomepageMainLargeScreen = () => {
  return (
    <div className="hidden lg:block">
      <BackgroundFilterBlack />
      <TheCarousal1 />
      {/* <HomePageCarouselForLargerScreens /> */}
      <HomepageCarouselLargeScreen />
      <LargerScreenSection1Type2 data={largerSectionData2} />
      <ProductCarousel3ForLargerScreens data={productsData} />
      <BooksSliderForLargeScreens />
      <LargerScreenSection1Type2 data={largerSectionData3} />
      <ProductCarousel3ForLargerScreens data={productsData} />
      <SignInMessage />
    </div>
  );
};

export default HomepageMainLargeScreen;
