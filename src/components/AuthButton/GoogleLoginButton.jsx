import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { signInWithGoogle } from "../../redux/actions/authAction";

const GoogleLoginButton = () => {
  const dispatch = useDispatch();

  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    dispatch(signInWithGoogle(token));
  };

  const handleError = () => {
    console.error("Google login failed");
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      useOneTap
      redirect_uri="http://localhost:5173"
    />
  );
};

export default GoogleLoginButton;