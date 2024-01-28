const screenSize = () => {
  let width = window.innerWidth;
  window.addEventListener("resize", () => {
    width = window.innerWidth;
  });
  return width;
};

export default screenSize;
