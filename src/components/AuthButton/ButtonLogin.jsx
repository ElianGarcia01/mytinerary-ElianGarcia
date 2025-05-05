import { FaUserCircle } from "react-icons/fa";
import { useNavigate, useMatch } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();
  const isActive = useMatch("/login");

  return (
    <button
      onClick={() => navigate("/login")}
      className={`bg-black text-white text-lg px-3 rounded-lg
         hover:bg-gray-800 transition lg:h-1/2 w-full cursor-pointer ${
        isActive ? "!bg-blue-500 ring-2 ring-white" : ""
      }`}
    >
      <FaUserCircle className="text-xl inline-block me-2" />
      Sign In
    </button>
  );
}