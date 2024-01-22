const OpenMenubar = () => {
  let menubar = document.getElementsByClassName("menubar")[0] as HTMLElement;
  // APPLYING LEFT-0 TO BRING IT IN FRONT OF THE USER------------------------------------------------------------------------------------------------------
  menubar.style.left = "0";
  let backgroundDarkForMenubar = document.getElementsByClassName(
    "backgroundDarkForMenubar"
  )[0] as HTMLElement;
  // APPLYING OPACITY 1 TO LOW LEVEL BRIGTHNESS BLACK DIV SO THAT THE BACKGROUND BECOMES DARK-----------------------------------------------------------------------
  backgroundDarkForMenubar.style.opacity = "1";
  let rootDiv = document.getElementById("root") as HTMLDivElement;
  // MAKING THE POSITION OF ROOT DIV FIXED SO THAT IT CAN NOT BE SCROLLED WHEN MENUBAR IS OPEN.-----------------------------------------------------------------------------
  rootDiv.style.position = "fixed";
};

export default OpenMenubar;
