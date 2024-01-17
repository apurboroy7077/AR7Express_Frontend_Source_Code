import ar7id from "ar7id";
import FashionInTrends2 from "./FashionInTrends2";
import FashionInTrends3 from "./FashionInTrends3";
type propsType = {
  data: {
    isSingleProduct: boolean;
    data: {
      title: string;
      productName: string;
      imageSrc: string;
    };
  }[];
};
const LargerScreenSection1Type2 = (props: propsType) => {
  let subSections = props.data;
  return (
    <div className="hidden lg:flex justify-around mt-5 mb-5">
      {subSections.map((datas) => {
        let { isSingleProduct, data } = datas;
        if (isSingleProduct) {
          return <FashionInTrends3 data={data} key={ar7id()} />;
        } else {
          return <FashionInTrends2 data={data} key={ar7id()} />;
        }
      })}
    </div>
  );
};

export default LargerScreenSection1Type2;
