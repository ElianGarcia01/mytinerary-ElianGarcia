import { FaDoorOpen } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LogoutButton() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

// En tu componente de logout
const handleLogout = async () => {
  try {
      await dispatch(signOut()).unwrap()
      navigate('/login')
      toast.success('Sesión cerrada correctamente') // Ejemplo con react-toastify
  } catch (error) {
      toast.error('Ocurrió un error al cerrar sesión', error)
      navigate('/login') // Redirigir igualmente
  }
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
