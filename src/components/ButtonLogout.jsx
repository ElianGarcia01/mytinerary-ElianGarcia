import { FaDoorOpen } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authAction";

export default function LogoutButton() {
  
  const dispatch = useDispatch()

  function handleLogout() {
    dispatch(logout())
    localStorage.removeItem('token')
  }

  return (
    <button
      className="bg-black text-white lg:text-lg px-2 rounded-lg 
        gap-2 hover:bg-gray-700 transition w-1/3 h-full lg:h-10 lg:w-32 cursor-pointer"
      onClick={handleLogout}
    >
      Log Out
      <FaDoorOpen className="inline-block ms-2" />
    </button>
  );
}
