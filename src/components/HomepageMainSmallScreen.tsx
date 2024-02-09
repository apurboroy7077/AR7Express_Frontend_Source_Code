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
import EndMessage from "./EndMessage";
import FashionInTrends from "./FashionInTrends";
import ShopAccessories from "./ShopAccessories";
import SignInMessage from "./SignInMessage";
import TheBoldHr from "./TheBoldHr";
import TheCarousal1 from "./TheCarousal1";
import TheHr from "./TheHr";
import TopPicks from "./TopPicks";

const HomepageMainSmallScreen = () => {
  return (
    <div className="lg:hidden">
      <TheCarousal1 />
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
  );
};

export default HomepageMainSmallScreen;
