import TopPicksProducts from "./TopPicksProducts";

type propsType = {
  data: {
    title: string;
    productDescription: string;
    price: string;
    imageSrc: string;
  };
};

const TopPicks = (props: propsType) => {
  let { title } = props.data;

  return (
    <div className=" p-3 ">
      <div className=" font-bold">{title}</div>
      <TopPicksProducts />
    </div>
  );
};

export default TopPicks;
