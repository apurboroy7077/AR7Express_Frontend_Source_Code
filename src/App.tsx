import TheRouter from "./TheRouter";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css";
import "./styles/react_slick.css";
import { Provider } from "react-redux";
import { store } from "./configs/redux/store";
import ExtraFunctions from "./components/extra_functions/ExtraFunctions";
function App() {
  return (
    <Provider store={store}>
      <ExtraFunctions />
      <TheRouter />
    </Provider>
  );
}

export default App;
