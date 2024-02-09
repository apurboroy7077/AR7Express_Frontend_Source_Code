import { useNavigate } from "react-router-dom";
import TheHr from "./TheHr";
import { useDispatch } from "react-redux";
import { setSpecificField } from "../configs/redux/signIInAndUpSlice";

const SignInMessage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let handleClickOnCreateAccount = () => {
    dispatch(setSpecificField("signUp"));
    navigate("/signin");
  };
  let handleClickOnSignIn = () => {
    dispatch(setSpecificField("signIn"));
    navigate("/signin");
  };
  return (
    <>
      <div className="hidden lg:block">
        <TheHr />
      </div>
      <div className="p-3 lg:text-center lg:bg-white lg:mr-[1vw] lg:ml-[1vw]">
        <div className="font-bold text-lg mb-2 lg:text-[0.95vw] lg:leading-[1vw]">
          <span className="lg:hidden">Sign in for the Best Experience</span>
          <span className="hidden lg:inline font-medium">
            See personalized recommendations
          </span>
        </div>
        <div className="lg:mb-[0.5vw] lg:mt-[0.5vw]">
          <button
            className="w-full bg-red-300 p-3  font-medium lg:w-fit lg:p-[0.6vw] lg:pr-[3vw] lg:pl-[3vw] lg:text-[0.87vw] lg:leading-[1vw] lg:border-[0.1vw] lg:border-red-400 active:scale-[0.95]"
            onClick={handleClickOnSignIn}
          >
            Sign In Securely
          </button>
        </div>
        <div>
          <span
            className=" cursor-pointer mt-2 block font-medium text-green-700 lg:text-[0.95vw] lg:leading-[1vw]"
            onClick={handleClickOnCreateAccount}
          >
            Create an Account
          </span>
        </div>
      </div>
      <div className="hidden lg:block">
        <TheHr />
      </div>
    </>
  );
};

export default SignInMessage;
