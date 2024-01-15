type propsType = {
  data: {
    title: string;
    imageSrc: string;
  };
};
const ShopAccessories = (props: propsType) => {
  let { title, imageSrc } = props.data;
  return (
    <div className=" grid grid-cols-2">
      <div className="flex items-center justify-center">
        <div className=" max-w-[80%] font-medium">{title}</div>
      </div>
      <div>
        <img src={imageSrc} />
      </div>
    </div>
  );
};

export default ShopAccessories;
