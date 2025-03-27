import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import {
  FaArrowLeft,
  FaMapMarkerAlt,
} from "react-icons/fa"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { FaFaceSadTear, FaSpinner } from "react-icons/fa6"

function CityDetails() {
  const { cityId } = useParams()
  const [city, setCity] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Forzar scroll al inicio al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Obtener una ciudad desde la API por du id
  useEffect(() => {
    const fetchCityDetails = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(
          `http://localhost:8080/api/cities/id/${cityId}`
        );
        setCity(response.data.response)
      } catch (error) {
        console.error("Error fetching city details:", error)
      } finally {
        setIsLoading(false)
      }
    };

    fetchCityDetails()
  }, [cityId])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Skeleton height={40} width={200} className="mb-6" />
          <Skeleton height={400} className="rounded-xl mb-6" />
          <div className="space-y-4">
            <Skeleton height={24} width="80%" />
            <Skeleton height={24} width="60%" />
            <Skeleton height={24} width="70%" />
            <Skeleton height={100} count={3} />
          </div>
        </div>
      </div>
    );
  }

  if (!city) {
    return (
      <div className="text-center min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          City not found
          <FaFaceSadTear className="text-blue-600 text-2xl ml-3 inline-block" />
        </h1>
        {/* Botón de regreso */}
        <div className="p-4 border-b border-gray-200">
          <Link
            to="/cities"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <FaArrowLeft className="mr-2" />
            Back to cities
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Titulo de la ciudad */}
          <div className="p-6 pb-2 flex justify-between">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <FaMapMarkerAlt className="text-red-500 mr-2" />
              {city.name_city}, {city.country}
            </h1>
            {/* Botón de regreso */}
            <div className="p-4 border-b border-gray-200">
              <Link
                to="/cities"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <FaArrowLeft className="mr-2" />
                Back to cities
              </Link>
            </div>
          </div>
          {/* Imagen */}
          <div className="px-6">
            <img
              src={city.image}
              alt={city.name_city}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          {/* Mensaje de Under Construction */}
          <div className="py-6 flex justify-center items-center">
            <FaSpinner className="text-red-500 mr-2 animate-spin" />
            <h3 className="text-xl font-semibold text-gray-800">
              Under Construction
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityDetails
