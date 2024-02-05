import { useDispatch } from "react-redux";
import { updateQuantityOfProductsInProductDetailsOnPageReload } from "../../configs/redux/productQuantityInProductDetails";
type productsDataType = {
  theId: string;
  quantity: number;
}[];
const UpdateProductDetailsOnPageReload = () => {
  let dispatch = useDispatch();
  let productsData = localStorage.getItem(
    "ar7express_product_details_page_data"
  );
  if (productsData) {
    let processedProductsData = JSON.parse(productsData) as productsDataType;
    dispatch(
      updateQuantityOfProductsInProductDetailsOnPageReload(
        processedProductsData
      )
    );
  }
};

export default UpdateProductDetailsOnPageReload;
