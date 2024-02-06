import UpdateCartDetailsOnPageReload from "./UpdateCartOnPageReload";
import UpdateProductDetailsOnPageReload from "./UpdateProductDetailsOnPageReload";
import UpdateScreenSize from "./UpdateScreenSize";

const ExtraFunctions = () => {
  UpdateScreenSize();
  UpdateProductDetailsOnPageReload();
  UpdateCartDetailsOnPageReload();
  return <></>;
};

export default ExtraFunctions;
