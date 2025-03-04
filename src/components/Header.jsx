import { useState } from "react"
import ButtonLogin from "./ButtonLogin"
import { NavLink } from "react-router-dom"

function Header() {


    // ESTADO Y FUNCION PARA ABRIR Y CERRAR EL NAVBAR EN PANTALLAS PEQUEÑAS
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen) }

    // ARREGLO DE OBJETOS, RUTAS
    const routes = [
        {
            path: "/",
            name: "Home",
        },
        {
            path: "/cities",
            name: "Cities",
        },
    ]


    return (
        <nav className="fixed top-0 left-0 w-full bg-black/35 backdrop-blur-md lg:bg-black/15 text-white h-18 py-2 z-10 flex justify-center font-stretch-normal">

            <div className="container px-4 flex justify-between items-center h-full md:px-10 ">

                {/* LOGO */}
                <div>
                    <a href="" className="text-xl md:text-2xl lg:text-3xl">My Tinerary</a>
                </div>

                {/* Menu de navegacion visible en pantallas grandes */}
                <ul className="hidden md:flex space-x-4 justify-center items-center gap-4 h-full">
                    {routes.map((route) => (
                        <li className="text-xl" key={route.path}>
                            <NavLink to={route.path} className={({
                                isActive }) => (isActive ? "text-gray-300" : "text-white")} >{route.name}</NavLink>
                        </li>
                    ))}
                    < ButtonLogin />
                </ul>


                {/* Ícono de hamburguesa (visible en pantallas pequeñas) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>


            {/* Menú desplegable (visible en pantallas pequeñas) */}
            {isMenuOpen && (
                <div className={`md:hidden bg-black/35 backdrop-blur-md transition-all duration-300 ${isMenuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
                    } overflow-hidden absolute top-16 left-0 w-full z-20`}>
                    <ul className="flex flex-col space-y-4 p-4">
                        {routes.map((route) => (
                            <li className="hover:text-gray-300 text-xl font-bold" key={route.path}>
                                <NavLink to={route.path} className={({
                                    isActive }) => (isActive ? "text-gray-300" : "text-white")} >{route.name}</NavLink>
                            </li>
                        ))}
                        < ButtonLogin />
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Header
