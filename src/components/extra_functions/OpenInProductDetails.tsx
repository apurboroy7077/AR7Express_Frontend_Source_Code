import { useNavigate } from "react-router-dom";

let OpenInProductDetails = (theId: string) => {
  let navigate = useNavigate();
  localStorage.setItem("ar7express_focused_product_id", theId);
  navigate("/single_product_details");
};

export default OpenInProductDetails;
