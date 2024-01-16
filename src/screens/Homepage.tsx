import EndMessage from "../components/EndMessage";
import FashionInTrends from "../components/FashionInTrends";
import ShopAccessories from "../components/ShopAccessories";
import SignInMessage from "../components/SignInMessage";
import TheBoldHr from "../components/TheBoldHr";
import TheCarousal1 from "../components/TheCarousal1";
import TheFooter from "../components/TheFooter";
import TheHr from "../components/TheHr";
import TheNavbar from "../components/TheNavbar";
import TopPicks from "../components/TopPicks";
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
      <main>
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
      </main>
      <footer>
        <TheFooter />
      </footer>
    </>
  );
};

export default Homepage;
