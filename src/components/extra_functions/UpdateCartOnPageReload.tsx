import { useDispatch } from "react-redux";
import { updateCartOnPageReload } from "../../configs/redux/cartSlice";
type productsDataType = {
  theId: string;
  quantity: number;
}[];
const UpdateCartDetailsOnPageReload = () => {
  let dispatch = useDispatch();
  let productsData = localStorage.getItem("ar7express_cart_page_data");
  if (productsData) {
    let processedProductsData = JSON.parse(productsData) as productsDataType;
    dispatch(updateCartOnPageReload(processedProductsData));
  }
};

export default UpdateCartDetailsOnPageReload;
