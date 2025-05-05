import { FaDoorOpen } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LogoutButton() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
  try {
      await dispatch(signOut()).unwrap()
      navigate('/login')
      toast.success('Sesión cerrada correctamente')
  } catch (error) {
      toast.error('Ocurrió un error al cerrar sesión', error)
      navigate('/login')
  }
}

  return (
    <button
      className="bg-black text-white text-lg
        px-3 rounded-lg hover:bg-gray-800 transition h-full
        w-full cursor-pointer"
      onClick={handleLogout}
    >
      Log Out
      <FaDoorOpen className="inline-block ms-2" />
    </button>
  );
}
