const CloseMenubar = () => {
  let menubar = document.getElementsByClassName("menubar")[0] as HTMLElement;
  // MOVING MENUBAR BACK TO LEFT--------------------------------------------------------------------------------------------------------------------
  menubar.style.left = "-100%";
  let backgroundDarkForMenubar = document.getElementsByClassName(
    "backgroundDarkForMenubar"
  )[0] as HTMLElement;
  // REMOVING LOW BRIGTHNESS DIV------------------------------------------------------------------------------------------------------------------------
  backgroundDarkForMenubar.style.opacity = "0";
  backgroundDarkForMenubar.style.pointerEvents = "none";
  let rootDiv = document.getElementById("root") as HTMLDivElement;
  // Making Root Div Static Again so that people Can Scroll---------------------------------------------------------------------------------------------------------
  rootDiv.style.position = "static";
};

export default CloseMenubar;
