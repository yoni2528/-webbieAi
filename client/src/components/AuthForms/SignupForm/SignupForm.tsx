import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuthRequest from "../../../hooks/api/useRequest/useAuthRequest";

const schema = yup
  .object({
    email: yup.string().email().required(),
    passwordConfirm: yup.string().required(),
    password: yup
      .string()
      .required()
      .min(6, "a number must have minmium of 6 charcaters"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const SignupFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { onSignup } = useAuthRequest();

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit((data) => onSignup(data))}
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

      <input
        placeholder="Password Confirm"
        className="pl-2 border-2 p-1 rounded-lg text-md "
        type={"password"}
        {...register("passwordConfirm", { required: true })}
      />
      <p className="text-[#ee7272]">{errors.passwordConfirm?.message}</p>

      <button
        type="submit"
        className="bg-[#6366F1] text-white p-2 rounded-lg hover:scale-105 transition-all"
      >
        Create account
      </button>
    </form>
  );
};

export default SignupFrom;
