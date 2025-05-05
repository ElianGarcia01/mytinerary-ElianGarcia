import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faX } from "@fortawesome/free-solid-svg-icons";
import { login } from "../redux/actions/authAction";
import { statusHttp } from "../redux/reducers/cityReducer";
import GoogleLoginButton from "../components/AuthButton/GoogleLoginButton";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authStore = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const status = authStore.status;
  const error = authStore.error;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2
          px-4 rounded-xl transition duration-300 cursor-pointer mb-4"
        >
          Login
          <FontAwesomeIcon icon={faRightFromBracket} className="ms-2" />
        </button>

        <GoogleLoginButton />

        {status === statusHttp.PENDING && (
          <p className="text-center mt-2 font-semibold">Loading...</p>
        )}
        {error && (
          <p className="text-center mt-2 font-semibold">
            {error}
            <FontAwesomeIcon icon={faX} className="ms-2 text-red-500" />
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/signUp" className="text-blue-500 font-bold hover:underline">
            Sign Up here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
