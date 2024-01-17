import { Carousel } from "react-responsive-carousel";
import "./../styles/responsive_carousel.css";
import FashionInTrends2 from "./FashionInTrends2";
import { shoesTrendsSectionData } from "../models/TrendSectionData";
const HomePageCarouselForLargerScreens = () => {
  return (
    <>
      <Carousel
        className=" "
        showArrows={true}
        showThumbs={false}
        //   onChange={onChange}
        //   onClickItem={onClickItem}
        //   onClickThumb={onClickThumb}
      >
        <div
          className="h-[700px] bg-cover"
          style={{
            backgroundImage: "url(/images/carousals/carousel_background_1.jpg)",
          }}
        >
          <FashionInTrends2 data={shoesTrendsSectionData} />
        </div>
        <div
          className="h-[200px] bg-cover"
          style={{ backgroundImage: "url(/images/products/pet_supplies.jpg)" }}
        >
          <div>
            <h1>Hi</h1>
          </div>
        </div>
        <div
          className="h-[200px] bg-cover"
          style={{ backgroundImage: "url(/images/products/pet_supplies.jpg)" }}
        ></div>
        <h1>Hello</h1>
        <button
          type="button"
          aria-label="next slide / item"
          class="control-arrow control-next"
        ></button>
      </Carousel>
    </>
  );
};

export default HomePageCarouselForLargerScreens;
