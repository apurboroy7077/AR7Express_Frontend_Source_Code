import { useSelector } from "react-redux";
import TheFooter from "../components/TheFooter";
import TheNavbar from "../components/TheNavbar";
import { stateType } from "../configs/redux/store";
import HomepageMainSmallScreen from "../components/HomepageMainSmallScreen";
import HomepageMainLargeScreen from "../components/HomepageMainLargeScreen";

const Homepage = () => {
  let screenSize = useSelector(
    (state: stateType) => state.screenSize.screenWidth
  );
  console.log(screenSize);
  return (
    <>
      <header>
        <TheNavbar />
      </header>
      <main className="relative lg:bg-zinc-200 pb-5">
        {screenSize < 1024 && <HomepageMainSmallScreen />}
        {screenSize > 1023 && <HomepageMainLargeScreen />}
      </main>
      <footer>
        <TheFooter />
      </footer>
    </>
  );
};

export default Homepage;
