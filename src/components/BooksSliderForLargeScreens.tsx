import { Component } from "react";
import Slider from "react-slick";

class BooksSliderForLargeScreens extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
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
    };
    return (
      <div className="hidden lg:block bg-white max-w-full overflow-hidden mr-[1vw] ml-[1vw] mt-[1.5vw] mb-[1.5vw] p-[1vw] ">
        <Slider {...settings}>
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
  }
}
export default BooksSliderForLargeScreens;
