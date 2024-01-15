import FashionInTrends from "../components/FashionInTrends";
import ShopAccessories from "../components/ShopAccessories";
import SignInMessage from "../components/SignInMessage";
import TheBoldHr from "../components/TheBoldHr";
import TheCarousal1 from "../components/TheCarousal1";
import TheHr from "../components/TheHr";
import TheNavbar from "../components/TheNavbar";
import TopPicks from "../components/TopPicks";
import {
  clothTrendsSection,
  electronicsSection,
  favouriteToysSection,
  shoesTrendsSectionData,
  shoesUnder60Dollar,
  tabletTrendsSection,
  womenSneakersTrendsSection,
} from "../models/TrendSectionData";

const Homepage = () => {
  return (
    <>
      <TheNavbar />
      <TheCarousal1 />
      <SignInMessage />
      <TheHr />
      <FashionInTrends data={shoesTrendsSectionData} />
      <TheHr />
      <FashionInTrends data={shoesUnder60Dollar} />
      <TheBoldHr />
      <ShopAccessories />
      <TheBoldHr />
      <FashionInTrends data={clothTrendsSection} />
      <TheHr />
      <FashionInTrends data={womenSneakersTrendsSection} />
      <TheHr />
      <FashionInTrends data={tabletTrendsSection} />
      <TheHr />
      <TopPicks />
      <TheHr />
      <FashionInTrends data={favouriteToysSection} />
      <TheHr />
      <FashionInTrends data={electronicsSection} />
    </>
  );
};

export default Homepage;
