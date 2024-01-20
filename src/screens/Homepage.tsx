import BackgroundFilterBlack from "../components/BackgroundFilterBlack";
import BooksSliderForLargeScreens from "../components/BooksSliderForLargeScreens";
import EndMessage from "../components/EndMessage";
import FashionInTrends from "../components/FashionInTrends";
import HomepageCarouselLargeScreen from "../components/HomepageCarouselLargeScreen";
import LargerScreenSection1Type2 from "../components/LargerScreenSection1Type2";
import ProductCarousel3ForLargerScreens from "../components/ProductCarousel3ForLargerScreens";
import ShopAccessories from "../components/ShopAccessories";
import SignInMessage from "../components/SignInMessage";
import TheBoldHr from "../components/TheBoldHr";
import TheCarousal1 from "../components/TheCarousal1";
import TheFooter from "../components/TheFooter";
import TheHr from "../components/TheHr";
import TheNavbar from "../components/TheNavbar";
import TopPicks from "../components/TopPicks";
import {
  largerSectionData2,
  largerSectionData3,
} from "../models/LargerSectionData";
import {
  shopComputersAccessoriesData,
  shopCycleAccessoriesData,
} from "../models/ShopAccessoriesData";
import {
  topPicksForBangladeshData,
  topPicksProductsInternationallyData,
} from "../models/TopPicksData";
import {
  clothTrendsSection,
  electronicsSection,
  exploreDepartmentSectionData,
  favouriteToysSection,
  shoesTrendsSectionData,
  shoesUnder60Dollar,
  tabletTrendsSection,
  womenSneakersTrendsSection,
} from "../models/TrendSectionData";

const Homepage = () => {
  return (
    <>
      <header>
        <TheNavbar />
      </header>
      <main className="relative lg:bg-zinc-200 pb-5">
        <BackgroundFilterBlack />
        <TheCarousal1 />
        {/* <HomePageCarouselForLargerScreens /> */}
        <HomepageCarouselLargeScreen />
        <LargerScreenSection1Type2 data={largerSectionData2} />
        <ProductCarousel3ForLargerScreens />
        <BooksSliderForLargeScreens />
        <LargerScreenSection1Type2 data={largerSectionData3} />
        <div className="lg:hidden">
          <SignInMessage />
          <TheHr />
          <FashionInTrends data={shoesTrendsSectionData} />
          <TheHr />
          <FashionInTrends data={shoesUnder60Dollar} />
          <TheBoldHr />
          <ShopAccessories data={shopComputersAccessoriesData} />
          <TheBoldHr />
          <FashionInTrends data={clothTrendsSection} />
          <TheHr />
          <FashionInTrends data={womenSneakersTrendsSection} />
          <TheHr />
          <FashionInTrends data={tabletTrendsSection} />
          <TheHr />
          <TopPicks data={topPicksForBangladeshData} />
          <TheHr />
          <FashionInTrends data={favouriteToysSection} />
          <TheHr />
          <FashionInTrends data={electronicsSection} />
          <TheBoldHr />
          <ShopAccessories data={shopCycleAccessoriesData} />
          <TheBoldHr />
          <TopPicks data={topPicksProductsInternationallyData} />
          <EndMessage />
          <FashionInTrends data={exploreDepartmentSectionData} />
        </div>
      </main>
      <footer>
        <TheFooter />
      </footer>
    </>
  );
};

export default Homepage;
