import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaSpinner,
} from "react-icons/fa"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function CityDetails() {
  const { cityId } = useParams()
  const [city, setCity] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showDetails, setShowDetails] = useState({}) // Para controlar cada itinerario

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const fetchCityDetails = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(`http://localhost:8080/api/cities/id/${cityId}`)
        setCity(response.data.response)
      } catch (error) {
        console.error("Error fetching city details:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCityDetails()
  }, [cityId])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton height={40} width={200} className="mb-6" />
        <Skeleton height={400} className="rounded-xl mb-6" />
      </div>
    )
  }

  if (!city) {
    return (
      <div className="text-center min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          City not found
        </h1>
        <Link to="/cities" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
          <FaArrowLeft className="mr-2" />
          Back to cities
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header con fondo */}
      <div
        className="h-96 bg-cover bg-center flex flex-col justify-center items-center text-white text-shadow-lg"
        style={{ backgroundImage: `url(${city.image})` }}
      >
        <h1 className="text-4xl font-bold">
          <FaMapMarkerAlt className="inline-block mr-2 text-red-500" />
          {city.name_city}, {city.country}
        </h1>
        <p className="text-lg mt-4 max-w-2xl text-center">
          {city.description || "A wonderful city full of amazing places to visit."}
        </p>
      </div>

      {/* Itinerarios */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Itineraries</h2>

        {city.itineraries && city.itineraries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {city.itineraries.map((itinerary, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-4">
                <img
                  src={itinerary.image}
                  alt={itinerary.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{itinerary.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={itinerary.user?.photo}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-700">{itinerary.user?.name}</span>
                </div>
                <p className="text-gray-700 mb-1">💲 {itinerary.price} USD</p>
                <p className="text-gray-700 mb-3">⏱ {itinerary.duration} hrs</p>
                <button
                  onClick={() =>
                    setShowDetails((prev) => ({
                      ...prev,
                      [index]: !prev[index],
                    }))
                  }
                  className="mt-auto bg-indigo-600 text-white py-1 px-3 rounded hover:bg-indigo-700 transition"
                >
                  View more
                </button>

                {showDetails[index] && (
                  <div className="mt-4 p-4 border-t border-gray-200 text-gray-600">
                    <p className="text-center flex items-center justify-center gap-2">
                      <FaSpinner className="animate-spin text-red-500" />
                      Under construction
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg text-center">
            No itineraries available yet.
          </p>
        )}
      </div>
    </div>
  )
}

export default CityDetails
