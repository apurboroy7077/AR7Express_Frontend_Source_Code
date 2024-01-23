import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Cartpage from "./screens/Cartpage";

const TheRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default TheRouter;
