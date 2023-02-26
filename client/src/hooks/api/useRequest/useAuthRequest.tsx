import { AxiosError } from "axios";

import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { errorActions } from "../../../store/Reducers/ErrorHandlerReducer/ErrorHandlerReducer";
import { spinnerActions } from "../../../store/Reducers/LoadingSpinnerReducer/LoadingSpinnerReducer";
import useAuthEndpoints from "../useEndpoints/useAuthEndpoints";

import { useNavigate } from "react-router-dom";
import { authActions } from "../../../store/Reducers/AuthReducer/AuthReducer";

const useAuthRequest = () => {
  const { handleSignup, handleLogin } = useAuthEndpoints();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSpinner = {
    onMutate: () => {
      dispatch(spinnerActions.startSpinner());
    },
    onSettled() {
      dispatch(spinnerActions.stopSpinner());
    },
  };

  const { mutate: onSignup } = useMutation(handleSignup, {
    onSuccess(data) {
      localStorage.setItem("token", data.token);
      dispatch(authActions.login());
      navigate("/websites");
    },
    onError(Error: AxiosError<{ title: string; error: string }>) {
      if (!Error.response) return;
      const { title, error } = Error.response.data;
      dispatch(errorActions.setError({ title, content: error }));
    },
    ...handleSpinner,
  });

  const { mutate: onLogin, status: loginStatus } = useMutation(handleLogin, {
    onSuccess(data) {
      localStorage.setItem("token", data.user.token);
      dispatch(authActions.login());
      navigate("/websites");
    },
    onError(Error: AxiosError<{ title: string; error: string }>) {
      console.log(Error.response);
      if (!Error.response) return;
      const { title, error } = Error.response.data;
      dispatch(errorActions.setError({ title, content: error }));
    },
    ...handleSpinner,
  });

  return { onSignup, onLogin, loginStatus };
};

export default useAuthRequest;
