import React from "react";
import { Link } from "react-router-dom";

import SignupForm from "../../components/AuthForms/SignupForm/SignupForm";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";

const Signup = () => {
  return (
    <AuthLayout>
      <div className="h-full flex flex-col gap-4 justify-center animate-[fadeIn_0.7s] w-full">
        <div>
          <h2 className="text-[#333] z-12 text-[1.8rem] mb-2 ">Sign up </h2>
          <h3>Sign up to start using the app</h3>
        </div>
        <SignupForm />
        <p>
          Already have an account?{" "}
          <Link to={"/login"} className="text-[#6366F1]">
            Sign In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Signup;
