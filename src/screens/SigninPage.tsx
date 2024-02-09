import { useEffect } from "react";
import TheFooter from "../components/TheFooter";
import TheNavbar from "../components/TheNavbar";
import SigninSection from "../components/signin/SigninSection";

const SigninPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header>
        <TheNavbar />
      </header>
      <main>
        <SigninSection />
      </main>
      <footer>
        <TheFooter />
      </footer>
    </>
  );
};

export default SigninPage;
