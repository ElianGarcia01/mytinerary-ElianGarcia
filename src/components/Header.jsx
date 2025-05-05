import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import LogoutButton from "./AuthButton/ButtonLogout";
import LoginButton from "./AuthButton/ButtonLogin";
import { useSelector } from "react-redux";
import SignUpButton from "./AuthButton/ButtonSignUp";

function Header() {
  // ESTADO Y FUNCION PARA ABRIR Y CERRAR EL NAVBAR EN PANTALLAS PEQUEÑAS
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ARREGLO DE OBJETOS, RUTAS
  const routes = [
    {
      path: "",
      name: "Home",
      publicRoute: false,
    },
    {
      path: "cities",
      name: "Cities",
      publicRoute: false,
    },
  ];

  const token = useSelector((state) => state.auth.token);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/35 backdrop-blur-md lg:bg-black/55 text-white h-18 py-2 z-10 flex justify-center font-stretch-normal">
      <div className="container px-4 flex justify-between items-center h-full md:px-10 ">
        {/* LOGO */}
        <Link
          to=""
          className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
        >
          My Tinerary
        </Link>

        {/* Menu de navegacion visible en pantallas grandes */}
        <ul className="hidden md:flex space-x-4 justify-center items-center gap-4 w-1/4 h-full">
          {routes.map(
            (route) =>
              (route.publicRoute || token) && (
                <li className="text-xl" key={route.path}>
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-gray-300"
                        : "text-white hover:text-gray-300"
                    }
                  >
                    {route.name}
                  </NavLink>
                </li>
              )
          )}
          {token && <LogoutButton />}
          {!token && <SignUpButton />}
          {!token && <LoginButton />}
        </ul>

        {/* Ícono de hamburguesa (visible en pantallas pequeñas) */}
        <div className="lg:hidden z-30 absolute top-6 right-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none text-2xl transition-transform duration-300 hover:scale-110"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú desplegable (visible en pantallas pequeñas) */}
      {isMenuOpen && (
        <div
          className={`md:hidden bg-black/35 backdrop-blur-md transition-all duration-300 ${
            isMenuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
          } overflow-hidden absolute top-16 left-0 w-full z-20`}
        >
          <ul className="flex flex-col space-y-4 p-4">
          {routes.map(
            (route) =>
              (route.publicRoute || token) && (
                <li className="text-xl" key={route.path}>
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-gray-300"
                        : "text-white hover:text-gray-300"
                    }
                  >
                    {route.name}
                  </NavLink>
                </li>
              )
          )}
          {token && <LogoutButton />}
          {!token && <LoginButton />}
          {!token && <SignUpButton />}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
