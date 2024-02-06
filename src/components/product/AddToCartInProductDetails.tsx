import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../configs/redux/store";
import { toast } from "react-toastify";
import { addToCart } from "../../configs/redux/cartSlice";

type propsType = {
  data: string;
};
const AddToCartInProductDetails = (props: propsType) => {
  let theId = props.data;
  let dispatch = useDispatch();
  let cartProducts = useSelector(
    (state: stateType) => state.cartSliceReducer.productsQuantity
  );
  let productsQuantity = useSelector(
    (state: stateType) =>
      state.updateQuantityOfProductsInProductDetails.quantityOfProducts
  );
  // Checking if the Product Already Exists in Cart or not----------------------------------------------
  let doesExist = false;
  let matchingProductsInCart = cartProducts.filter(
    (product) => theId == product.theId
  );
  if (matchingProductsInCart.length > 0) {
    doesExist = true;
  }
  console.log(matchingProductsInCart);
  let handleClickOnAddToCart = () => {
    let quantity = 0;
    let productDetails = productsQuantity.filter(
      (product) => theId == product.theId
    );
    if (productDetails.length > 0) {
      quantity = productDetails[0].quantity;
    }
    // Returning and Giving a message if the Quantity is 0--------------------------------------------------
    if (quantity < 1) {
      toast("Quantity Must me More than 0");
      return;
    }
    dispatch(addToCart({ theId, quantity }));
  };

  return (
    <div className="mt-2">
      {!doesExist && (
        <span>
          <button
            onClick={handleClickOnAddToCart}
            className="w-full bg-[#FFA41C] rounded-lg p-2 active:scale-[0.95]"
          >
            Add to Cart
          </button>
        </span>
      )}
      {doesExist && (
        <span>
          <button className="w-full bg-[#FFA41C] rounded-lg p-2 active:scale-[0.95]">
            Added to Cart{" "}
            <span className="ml-1">
              <i className="fa-regular fa-square-check fa-bounce" />
            </span>
          </button>
        </span>
      )}
    </div>
  );
};

export default AddToCartInProductDetails;
