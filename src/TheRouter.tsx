import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Cartpage from "./screens/Cartpage";
import SigninPage from "./screens/SigninPage";
import SingleProductDetails from "./screens/SingleProductDetails";

const TheRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route
            path="/single_product_details"
            element={<SingleProductDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default TheRouter;
