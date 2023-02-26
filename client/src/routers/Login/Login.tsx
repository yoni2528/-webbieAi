import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/AuthForms/LoginForm/LoginForm";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <div className="h-full flex flex-col gap-4 justify-center animate-[fadeIn_0.7s] w-full">
        <div>
          <h2 className="text-[#333] z-12 sm:text-[1.8rem] mb-2 text-xl ">
            Welcome to WebbieAi
          </h2>
          <h3 className="mb-2 text-md mt-4">Build amazing websites with Ai</h3>
        </div>
        <LoginForm />
        <p>
          Don&rsquo;t have an account?{" "}
          <Link to={"/signup"} className="text-[#6366F1]">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
