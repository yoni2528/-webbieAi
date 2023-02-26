import Axios from "axios";

import { BASE_URL } from "../../../config/Config";
import { useDispatch } from "react-redux";

import { spinnerActions } from "../../../store/Reducers/LoadingSpinnerReducer/LoadingSpinnerReducer";

type LoginDetails = {
  email: string;
  password: string;
};
type SignupDetails = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const useAuthEndpoints = () => {
  const dispatch = useDispatch();

  const baseAxios = Axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const handleLogin = async (loginDetails: LoginDetails) => {
    const res = await baseAxios.post("app/v1/users/login", loginDetails);
    return res.data;
  };

  const handleSignup = async (signupDetails: SignupDetails) => {
    const res = await baseAxios.post("app/v1/users/signup", signupDetails);
    return res.data;
  };

  return { handleLogin, handleSignup };
};

export default useAuthEndpoints;
