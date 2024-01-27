import TheFooter from "../components/TheFooter";
import TheNavbar from "../components/TheNavbar";
import ProductDetailsSection from "../components/product/ProductDetailsSection";

const SingleProductDetails = () => {
  return (
    <>
      <header>
        <TheNavbar />
      </header>
      <main>
        <ProductDetailsSection />
      </main>
      <footer>
        <TheFooter />
      </footer>
    </>
  );
};

export default SingleProductDetails;
