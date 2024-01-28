import TheFooter from "../components/TheFooter";
import TheNavbar from "../components/TheNavbar";
import ProductDetailsForLargerScreens from "../components/product/ProductDetailsForLargerScreens";
import ProductDetailsSectionForSmallerScreens from "../components/product/ProductDetailsSectionForSmallerScreens";

const SingleProductDetails = () => {
  return (
    <>
      <header>
        <TheNavbar />
      </header>
      <main>
        <ProductDetailsSectionForSmallerScreens /> {/* //FOR Small Screens */}
        <ProductDetailsForLargerScreens /> {/* //FOR Larger Screens */}
      </main>
      <footer>
        <TheFooter />
      </footer>
    </>
  );
};

export default SingleProductDetails;
