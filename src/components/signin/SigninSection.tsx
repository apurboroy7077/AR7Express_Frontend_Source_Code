import SigninComponents from "./SigninComponents";
import SignupComponents from "./SignupComponents";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../configs/redux/store";
import { changeField } from "../../configs/redux/signIInAndUpSlice";

const SigninSection = () => {
  let dispatch = useDispatch();
  let handleIsCreateAccountInputChange = () => {
    dispatch(changeField());
  };
  let openedField = useSelector(
    (state: stateType) => state.signInAndUp.openedField
  );

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
          {/* This is the Sign Up Section---------------------------------------------------------------------------------*/}
          <div className="flex items-start ">
            <span>
              <input
                type="radio"
                className=" block h-[1.3rem] w-[1.3rem]"
                checked={openedField == "signUp"}
                onChange={handleIsCreateAccountInputChange}
              />
            </span>
            <span>
              <span className="ml-3 font-medium ">Create Account.</span>
              <span className="ml-1 font-medium text-[0.9rem] ">
                New to Amazon?
              </span>
            </span>
          </div>
          <SignupComponents />
          {/* THIS IS THE SIGNIN SECTION----------------------------------------------------------------------------------------------- */}
          <div className="flex items-start mt-3">
            <span>
              <input
                type="radio"
                className=" block h-[1.3rem] w-[1.3rem]"
                checked={openedField == "signIn"}
                onChange={handleIsCreateAccountInputChange}
              />
            </span>
            <span>
              <span className="ml-3 font-medium ">Sign in.</span>
              <span className="ml-1 font-medium text-[0.9rem] ">
                Already a customer?
              </span>
            </span>
          </div>
          <SigninComponents />
        </div>
      </div>
    </div>
  );
};

export default SigninSection;
