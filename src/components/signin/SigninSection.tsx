import { useState } from "react";
import SigninComponents from "./SigninComponents";
import SignupComponents from "./SignupComponents";

const SigninSection = () => {
  let [isSignUpComponents, setIsSignUpComponents] = useState(false);
  let [isSignInComponents, setIsSignInComponents] = useState(true);
  let handleIsCreateAccountInputChange = () => {
    if (isSignUpComponents) {
      setIsSignUpComponents(false);
      setIsSignInComponents(true);
    } else {
      setIsSignUpComponents(true);
      setIsSignInComponents(false);
    }
  };

  return (
    <div className=" bg-[#F6F6F6] mb-5 min-w-full ">
      <div className=" text-center hidden lg:block mb-[-1.2rem]">
        <span className="text-[3.5rem] ">
          <i className="fa-brands fa-amazon" />
        </span>
      </div>
      <div className=" max-w-[27rem] p-3 m-auto ">
        <div className="lg:hidden">
          <span className=" text-[1.3rem] font-medium">Welcome</span>
        </div>
        <div className="bg-white p-5 mt-2 rounded border-[1px] border-[black] ">
          <div className="hidden lg:block mb-2">
            <span className=" text-[1.3rem] font-medium">Welcome</span>
          </div>
          <div className="flex items-start ">
            <span>
              <input
                type="radio"
                className=" block h-[1.3rem] w-[1.3rem]"
                checked={isSignUpComponents}
                onClick={handleIsCreateAccountInputChange}
              />
            </span>
            <span>
              <span className="ml-3 font-medium ">Create Account.</span>
              <span className="ml-1 font-medium text-[0.9rem] ">
                New to Amazon?
              </span>
            </span>
          </div>
          <SignupComponents data={isSignUpComponents} />
          <div className="flex items-start mt-3">
            <span>
              <input
                type="radio"
                className=" block h-[1.3rem] w-[1.3rem]"
                checked={isSignInComponents}
                onClick={handleIsCreateAccountInputChange}
              />
            </span>
            <span>
              <span className="ml-3 font-medium ">Sign in.</span>
              <span className="ml-1 font-medium text-[0.9rem] ">
                Already a customer?
              </span>
            </span>
          </div>
          <SigninComponents data={isSignInComponents} />
        </div>
      </div>
    </div>
  );
};

export default SigninSection;
