import { Link } from "react-router-dom";
import TheHr from "./TheHr";

const SignInMessage = () => {
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
          <button className="w-full bg-red-300 p-3  font-medium lg:w-fit lg:p-[0.6vw] lg:pr-[3vw] lg:pl-[3vw] lg:text-[0.87vw] lg:leading-[1vw] lg:border-[0.1vw] lg:border-red-400 ">
            Sign In Securely
          </button>
        </div>
        <div>
          <Link
            to="/"
            className="mt-2 block font-medium text-green-700 lg:text-[0.95vw] lg:leading-[1vw]"
          >
            Create an Account
          </Link>
        </div>
      </div>
      <div className="hidden lg:block">
        <TheHr />
      </div>
    </>
  );
};

export default SignInMessage;
