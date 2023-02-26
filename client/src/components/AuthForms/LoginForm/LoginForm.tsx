import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuthRequest from "../../../hooks/api/useRequest/useAuthRequest";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .min(6, "a number must have minmium of 6 charcaters"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { onLogin } = useAuthRequest();

  const handleGuestClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onLogin({
      email: "test4@test.com",
      password: "1234567",
    });
  };

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit((data) => {
        onLogin(data);
      })}
    >
      <input
        placeholder="Email"
        className="pl-2 border-2 p-1 rounded-lg"
        {...register("email")}
      />
      <p className="text-[#ee7272]">{errors.email?.message}</p>
      <input
        placeholder="Password"
        className="pl-2 border-2 p-1 rounded-lg text-md "
        type={"password"}
        {...register("password", { required: true })}
      />
      <p className="text-[#ee7272]">{errors.password?.message}</p>

      <button
        type="submit"
        className="bg-[#6366F1] text-white p-2 rounded-lg hover:scale-105 transition-all"
      >
        Sign In
      </button>
      <button
        onClick={handleGuestClick}
        type="submit"
        className="bg-[#fff] text-[#6366F1] border-2 p-2 rounded-lg hover:scale-105 transition-all"
      >
        Continue as guest
      </button>
    </form>
  );
};

export default LoginForm;
