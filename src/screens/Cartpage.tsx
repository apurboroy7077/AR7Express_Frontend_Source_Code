import ProductCarousel3ForLargerScreens from "../components/ProductCarousel3ForLargerScreens";
import TheFooter from "../components/TheFooter";
import TheNavbar from "../components/TheNavbar";
import CartSection from "../components/cart/CartSection";
import productsData from "./../models/ProductsData.json";

const Cartpage = () => {
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
