import { Link } from "react-router-dom";

const SignInMessage = () => {
  return (
    <div className="p-3 lg:hidden">
      <div className="font-bold text-lg mb-2">
        Sign in for the Best Experience
      </div>
      <div>
        <button className="w-full bg-red-300 p-3 font-medium">
          Sign In Securely
        </button>
      </div>
      <div>
        <Link to="/" className="mt-2 block font-medium text-green-700">
          Create an Account
        </Link>
      </div>
    </div>
  );
};

export default SignInMessage;
