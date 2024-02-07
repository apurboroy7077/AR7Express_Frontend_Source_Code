import { useEffect } from "react";
import ProductCarousel3ForLargerScreens from "../components/ProductCarousel3ForLargerScreens";
import TheFooter from "../components/TheFooter";
import TheNavbar from "../components/TheNavbar";
import CartSection from "../components/cart/CartSection";
import { productsData } from "../models/ProductsData";

const Cartpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header>
        <TheNavbar />
      </header>
      <main>
        <CartSection />
        <ProductCarousel3ForLargerScreens data={productsData} />
      </main>
      <footer>
        <TheFooter />
      </footer>
    </>
  );
};

export default Cartpage;
