import { useEffect } from "react";
import TheFooter from "../components/TheFooter";
import TheNavbar from "../components/TheNavbar";
import ProductDetailsForLargerScreens from "../components/product/ProductDetailsForLargerScreens";
import ProductDetailsSectionForSmallerScreens from "../components/product/ProductDetailsSectionForSmallerScreens";
import { productsData } from "../models/ProductsData";
import { useSelector } from "react-redux";
import { stateType } from "../configs/redux/store";

const SingleProductDetails = () => {
  let screenSize = useSelector(
    (state: stateType) => state.screenSize.screenWidth
  );
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
        {/* //FOR Small Screens-------------------------------------------------------------------------- */}
        {screenSize < 1024 && (
          <ProductDetailsSectionForSmallerScreens data={productData} />
        )}
        {/* //FOR Larger Screens------------------------------------------------------------------------------- */}
        {screenSize > 1023 && (
          <ProductDetailsForLargerScreens data={productData} />
        )}
      </main>
      <footer>
        <TheFooter />
      </footer>
    </>
  );
};

export default SingleProductDetails;
