import axios from "axios"
import { useEffect, useState } from "react"
import {
  FaEye,
  FaFaceSadTear,
  FaGlobe,
  FaLocationDot,
  FaMoneyBill1Wave,
} from "react-icons/fa6"
import { Link } from "react-router-dom"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { FiSearch } from "react-icons/fi"

function Card() {
  const [cities, setCities] = useState([])
  const [search, setSearch] = useState("")

  // Obtener las ciudades desde la API
  useEffect(() => {
    const getCities = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/cities/allCities"
        );
        setCities(response.data.response);
      } catch (error) {
        console.error("Error fetching cities:", error)
      }
    };
    getCities()
  }, [])

  // Filtrar ciudades según el texto ingresado en la búsqueda
  const filteredCities = cities.filter((city) =>
    city.name_city.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="container mx-auto px-8 py-14 shadow-2xl">
      {/* Input de búsqueda */}
      <div className="relative max-w-lg mx-auto my-8 w-full shadow-2xl">
        <div className="flex items-center border-2 border-gray-300 rounded-full px-5 py-3 bg-white shadow-md hover:shadow-lg transition-all duration-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300">
          <FiSearch className="text-gray-500 mr-3" size={20} />
          <input
            type="text"
            placeholder="Search for a city..."
            className="w-full outline-none text-gray-700 placeholder-gray-500 bg-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Skeleton mientras carga la API */}
      {cities.length === 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-full">
                <Skeleton height={280} className="w-full rounded-t-lg" />
                <Skeleton width="100%" height={20} className="mt-2" />
                <Skeleton width="50%" height={20} className="mt-2" />
              </div>
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 shadow-xl">
          {filteredCities.length === 0 ? (
            <div className="col-span-full flex justify-center items-center w-full h-64">
              <p className="text-black text-center text-2xl font-semibold">
                No cities found,
                try another search.
                <FaFaceSadTear className="text-black text-2xl ml-3 inline-block animate-ping" />
              </p>
            </div>
          ) : (
            filteredCities.map((city) => (
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
                      <FaLocationDot className="inline-block mr-2" />
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
                  <Link to={`/cities/details/${city._id}`} className="w-full">
                    <button className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold py-2 rounded-lg shadow-md flex justify-center items-center cursor-pointer">
                      View More
                      <FaEye className="inline-block ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  )
}

export default Card
