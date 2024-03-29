import { useEffect, useState } from "react";

const ShowDigits = () => {
  let [direction, setDirection] = useState("");
  useEffect(() => {
    if (window.innerWidth > 1023) {
      setDirection("column");
    } else {
      setDirection("row");
    }
  }, []);
  return (
    <div
      style={{
        display: "flex",
        gap: "7px",
        flexWrap: "wrap",
        flexDirection: direction,
      }}
    >
      {Array.from({ length: 101 }).map((_, index) => {
        return <div key={Math.random()}>{index}</div>;
      })}
    </div>
  );
};

export default ShowDigits;
