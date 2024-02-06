import CloseMenubar from "./CloseMenubar";

const BackgroundFilterBlack = () => {
  let handleClickOnBlackDiv = () => {
    CloseMenubar();
    console.log("hi");
  };
  return (
    <div
      className="background_filter_black_div absolute top-0 left-0 right-0 bottom-0 z-10 hidden"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      onClick={handleClickOnBlackDiv}
    >
      Hillo
    </div>
  );
};

export default BackgroundFilterBlack;
