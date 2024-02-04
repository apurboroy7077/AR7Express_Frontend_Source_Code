import Slider from "react-slick";
import { GiveSpecificNumbersOfProductsDataFromCategory } from "./extra_functions/GiveSpecificNumbersOfProductsData";
import BooksSliderSlide from "./BooksSliderSlide";
import ar7id from "ar7id";
let booksData = GiveSpecificNumbersOfProductsDataFromCategory(10, "book");
let BooksSliderForLargeScreens = () => {
  const settings = {
    className: "slider variable-width",
    focusOnSelect: true,
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <div className="hidden lg:block bg-white max-w-full overflow-hidden mr-[1vw] ml-[1vw] mt-[1.5vw] mb-[1.5vw] p-[1vw] ">
      <div className="font-bold text-[1.2vw] pb-[0.7vw]">
        Top Seller in Books for You
      </div>
      <Slider {...settings} className="">
        {booksData.map((data) => {
          return <BooksSliderSlide key={ar7id()} data={data} />;
        })}
      </Slider>
    </div>
  );
};

export default BooksSliderForLargeScreens;
