import { FaUserPlus } from "react-icons/fa6";
import { useNavigate, useMatch } from "react-router-dom";

export default function SignUpButton() {
  const navigate = useNavigate();
  const isActive = useMatch("/signup");

  return (
    <button
      onClick={() => navigate("/signup")}
      className={`bg-black text-white text-lg px-3 rounded-lg hover:bg-gray-800 transition lg:h-1/2 w-full cursor-pointer ${
        isActive ? "!bg-blue-500 ring-2 ring-white" : ""
      }`}
    >
      <FaUserPlus className="text-xl inline-block me-2" />
      Sign Up
    </button>
  );
}
