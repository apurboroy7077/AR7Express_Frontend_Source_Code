import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootType, updateScreenWidth } from "../../configs/redux/screenSize";

const UpdateScreenSize = () => {
  let dispatch = useDispatch();
  // IT WILL SET THE WIDTH FIRST TIME WHEN LOADS-----------------------------------------------------------------
  useEffect(() => {
    let initialWidth = window.innerWidth;
    dispatch(updateScreenWidth(initialWidth));
  }, []);
  // UPDATE SCREEN SIZE EVERYTIME SCREEN SIZE CHANGES
  window.addEventListener("resize", () => {
    let newWidth = window.innerWidth;
    dispatch(updateScreenWidth(newWidth));
  });
};

export default UpdateScreenSize;
