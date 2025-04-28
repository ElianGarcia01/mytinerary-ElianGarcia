import {
  FaEye,
  FaGlobe,
  FaLocationDot,
  FaMoneyBill1Wave,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

function Card({ city }) {
  return (
    <div
      key={city._id}
      className="relative backdrop-blur-md bg-black text-white rounded-2xl overflow-hidden shadow-3xl transform transition-transform duration-300 hover:scale-105"
    >
      {/* Imagen de fondo */}
      <div
        className="h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${city.image})` }}
      >
        <div className="h-full w-full bg-black/30 flex items-start p-4">
          <h3 className="text-lg font-semibold">
            <FaLocationDot className="inline-block mr-2 text-red-500" />
            {city.name_city}, {city.country}
          </h3>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-md text-white">
            <FaGlobe className="inline-block mr-2" />
            {city.continent}
          </span>
          <span className="text-xs bg-blue-500 px-2 py-1 rounded">
            <FaMoneyBill1Wave className="inline-block mr-2" />
            {city.currency}
          </span>
        </div>

        {/* Botón de Details */}
        <Link to={"/cities/details"} state={{ city: city}} className="w-full">
          <button className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold py-2 rounded-lg shadow-md flex justify-center items-center cursor-pointer">
            View More
            <FaEye className="inline-block ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
