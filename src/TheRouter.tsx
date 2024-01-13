import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";

const TheRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default TheRouter;
