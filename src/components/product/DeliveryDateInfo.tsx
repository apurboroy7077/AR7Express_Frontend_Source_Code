const DeliveryDateInfo = () => {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 3);
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  } as Intl.DateTimeFormatOptions;
  let finalDate = currentDate.toLocaleDateString("en-US", options);
  console.log(finalDate);
  return (
    <div className=" mt-2">
      <span className="text-sm font-medium opacity-90">
        <span className=" ">Delivery </span>
        <span className="font-bold">{finalDate}</span>
        <span className=" "> Order Within </span>
        <span className="text-green-700">22 hrs 38 mins</span>
      </span>
    </div>
  );
};

export default DeliveryDateInfo;
