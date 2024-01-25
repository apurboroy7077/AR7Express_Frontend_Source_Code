import { useState } from "react";

const SignupComponents = (props) => {
  let shouldProceed = props.data;
  if (!shouldProceed) {
    return null;
  }
  let [showPassword, setShowPassword] = useState(false);
  let handleClickOnCheckboxToShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form>
      <div className="mt-3">
        <div>
          <label className="font-medium">First and Last Name</label>
        </div>
        <div className="mt-1">
          <input
            type="text"
            className="border-[1px] border-[grey] w-full h-[3rem] pl-2 pr-2 rounded "
            required
          />
        </div>
      </div>
      <div className="mt-3">
        <div>
          <label className="font-medium">Mobile number or Email</label>
        </div>
        <div className="mt-1">
          <input
            className="border-[1px] border-[grey] w-full h-[3rem] pl-2 pr-2 rounded "
            required
          />
        </div>
      </div>
      <div className="mt-3">
        <div>
          <label className="font-medium">Create a Password</label>
        </div>
        <div className="mt-1">
          <input
            type={showPassword ? "text" : "password"}
            className="border-[1px] border-[grey] w-full h-[3rem] pl-2 pr-2 rounded "
            required
          />
        </div>
      </div>
      <div className="mt-3 flex items-center">
        <span>
          <input
            type="checkbox"
            className="block w-[1.2rem] h-[1.2rem]"
            checked={showPassword}
            onClick={handleClickOnCheckboxToShowPassword}
          />
        </span>
        <span className="ml-2 text-sm font-medium opacity-90">
          Show Password
        </span>
      </div>
      <div className="mt-3">
        <button
          type="submit"
          className=" bg-red-300 w-full p-2 rounded active:scale-[0.95] "
        >
          Sign Up
        </button>
      </div>
      <div className="pt-3 ">
        <span className="font-medium">
          By creating an account, you agree to Amazon's{" "}
          <span className=" text-green-700">Conditions of Use </span>
          and <span className=" text-green-700">Privacy Notice</span>.
        </span>
      </div>
    </form>
  );
};

export default SignupComponents;
