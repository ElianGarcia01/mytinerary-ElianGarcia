import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaDollarSign,
  FaEye,
  FaGlobe,
  FaLocationDot,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Card() {
  const [cities, setCities] = useState([]);

  const getCities = async () => {
    const responseData = await axios.get(
      "http://localhost:8080/api/cities/allCities"
    );
    setCities(responseData.data.response);
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <section className="container mx-auto px-8 py-14 shadow-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 shadow-xl">
        {cities.map((city) => (
          <div
            key={city._id}
            className="relative backdrop-blur-md bg-black text-white rounded-2xl overflow-hidden shadow-3xl
            transform transition-transform duration-300 hover:scale-105"
          >
            {/* Imagen de fondo */}
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${city.image})` }}
            >
              <div className="h-full w-full bg-black/30 flex items-start p-4">
                <h3 className="text-lg font-semibold">
                  <FaLocationDot className="inline-block mr-2" />
                  {city.name_city}, {city.country}
                </h3>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-4 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-white">
                  <FaGlobe className="inline-block mr-2" />
                  {city.continent}
                </span>
                <span className="text-xs bg-blue-500 px-2 py-1 rounded">
                  <FaDollarSign className="inline-block" />

                  {city.currency}
                </span>
              </div>

              {/* Botón de Details */}
              <Link to={`/details/${city.name_city}`} className="w-full">
                <button className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold py-2 rounded-lg shadow-md
                flex justify-center items-center cursor-pointer">
                  View More
                  <FaEye className="inline-block ml-2" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Card;
