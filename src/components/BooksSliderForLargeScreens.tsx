import Slider from "react-slick";

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
        <div className="mr-5 ml-5 ">
          <img className="w-[8vw]" src="/images/products/book_1.jpg" />
        </div>
        <div className="mr-5 ml-5 ">
          <img className="w-[8vw]" src="/images/products/book_2.jpg" />
        </div>
        <div className="mr-5 ml-5 ">
          <img className="w-[8vw]" src="/images/products/book_3.jpg" />
        </div>
        <div className="mr-5 ml-5 ">
          <img className="w-[8vw]" src="/images/products/book_1.jpg" />
        </div>
        <div className="mr-5 ml-5 ">
          <img className="w-[8vw]" src="/images/products/book_2.jpg" />
        </div>
        <div className="mr-5 ml-5 ">
          <img className="w-[8vw]" src="/images/products/book_3.jpg" />
        </div>
        <div className="mr-5 ml-5 ">
          <img className="w-[8vw]" src="/images/products/book_1.jpg" />
        </div>
        <div className="mr-5 ml-5 ">
          <img className="w-[8vw]" src="/images/products/book_2.jpg" />
        </div>
        <div className="mr-5 ml-5 ">
          <img className="w-[8vw]" src="/images/products/book_3.jpg" />
        </div>
      </Slider>
    </div>
  );
};

export default BooksSliderForLargeScreens;
