import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../redux/actions/authAction";
import { statusHttp } from "../redux/reducers/cityReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import GoogleLoginButton from "../components/AuthButton/GoogleLoginButton";

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

        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 cursor-pointer"
          >
            Sign Up
            <FontAwesomeIcon icon={faArrowRightToBracket} className="ms-2" />
          </button>
          
          <GoogleLoginButton />

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
