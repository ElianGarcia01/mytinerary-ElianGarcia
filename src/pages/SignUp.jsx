import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInWithGoogle, signUp } from "../redux/actions/authAction";
import { statusHttp } from "../redux/reducers/cityReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const countries = [
  "Argentina",
  "Brazil",
  "Chile",
  "Colombia",
  "Mexico",
  "Peru",
  "Spain",
  "United States",
  "Canada",
  "Germany",
];

const SignUpForm = () => {
  const dispatch = useDispatch();
  const authStore = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
    country: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(form));
  };

    const handleGoogleSignUp = () => {
      dispatch(signInWithGoogle());
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 px-4 pt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded-2xl shadow-lg w-full max-w-md h-1/2"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create Account
        </h2>

        <div className="mt-4">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            minLength={6}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 mb-1">Photo URL</label>
          <input
            name="photo"
            type="url"
            value={form.photo}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="https://example.com/photo.jpg"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 mb-1">Country</label>
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center items-center gap-2">
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 cursor-pointer"
          >
            Sign Up
            <FontAwesomeIcon icon={faArrowRightToBracket} className="ms-2" />
          </button>

          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="mt-6 w-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 font-semibold py-2 px-4 rounded-xl transition duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            Sign Up with Google
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </button>
        </div>

        {authStore.status === statusHttp.PENDING && (
          <p className="text-center mt-2 font-semibold">
            Creating account...
          </p>
        )}
        {authStore.status === statusHttp.SUCCED && (
          <p className="text-center mt-2 font-semibold">
            successfully created account
            <FaCheckCircle className="text-green-500 inline-block ms-2 text-xl" />
          </p>
        )}
        {authStore.error && (
          <p className="text-center mt-2 font-semibold text-red-500">
            {authStore.error}
            <FontAwesomeIcon icon={faX} className="ms-2" />
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-bold hover:underline">
            Log In here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
