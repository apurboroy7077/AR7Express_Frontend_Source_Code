import { useEffect } from "react";
import TheFooter from "../components/TheFooter";
import TheNavbar from "../components/TheNavbar";
import ProductDetailsForLargerScreens from "../components/product/ProductDetailsForLargerScreens";
import ProductDetailsSectionForSmallerScreens from "../components/product/ProductDetailsSectionForSmallerScreens";
import { productsData } from "../models/ProductsData";

const SingleProductDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let savedProductId = localStorage.getItem("ar7express_focused_product_id");
  let productData = productsData.filter(
    (data) => data.theId == savedProductId
  )[0];
  return (
    <>
      <header>
        <TheNavbar />
      </header>
      <main>
        <ProductDetailsSectionForSmallerScreens data={productData} />{" "}
        {/* //FOR Small Screens */}
        <ProductDetailsForLargerScreens data={productData} />{" "}
        {/* //FOR Larger Screens */}
      </main>
      <footer>
        <TheFooter />
      </footer>
    </>
  );
};

export default SingleProductDetails;
