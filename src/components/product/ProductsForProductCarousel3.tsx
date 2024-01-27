import ar7id from "ar7id";
import ProductCard from "./ProductCard";
type propsType = {
  data: {
    name: string;
    description: string;
    price: number;
    discountPercentage: number;
    imageSrc: string;
  }[];
};
const ProductsForProductCarousel3 = (props: propsType) => {
  let productsData = props.data;
  //Choosing random 6 products from the Array----------------------------------------------------------------------------------------------------
  let random6Product = productsData.sort(() => Math.random() - 0.5);
  random6Product = random6Product.slice(0, 6);
  return (
    <div className=" flex justify-between">
      {random6Product.map((datas) => {
        return <ProductCard data={datas} key={ar7id()} />;
      })}
    </div>
  );
};

export default ProductsForProductCarousel3;
