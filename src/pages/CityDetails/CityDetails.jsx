import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaSpinner,
} from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import getItineraries from "../../redux/actions/ItineraryAction";
import { FaClock, FaMoneyBill1Wave } from "react-icons/fa6";

function CityDetails() {
  const location = useLocation();
  const city = location.state?.city;
  const nameCity = city.name_city;

  const dispatch = useDispatch();
  const { itineraries, status } = useSelector((state) => state.Itinerary);
  const [showDetails, setShowDetails] = useState({});

  useEffect(() => {
    dispatch(getItineraries(nameCity));
  }, [nameCity, dispatch]);

  // Scroll to top al cargar el componente
  useEffect(() => {
    window.scrollTo(0, 0); // { top: 0, behavior: "smooth" } para animación suave
  }, [location.pathname]); // Se ejecuta cuando cambia la ruta

  if (status === "pending") {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton height={40} width={100} className="mb-6" />
        <Skeleton height={500} className="rounded-xl mb-6" />
      </div>
    );
  }

  console.log(itineraries);

  if (!city) {
    return (
      <div className="text-center min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          City not found
        </h1>
        <Link
          to="/cities"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <FaArrowLeft className="mr-2" />
          Back to cities
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header con fondo */}
      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center
        items-center text-white"
        style={{ backgroundImage: `url(${city.image})` }}
      >
        <h1 className="text-4xl font-extrabold mt-72">
          <FaMapMarkerAlt className="inline-block mr-2 text-red-500" />
          {city.name_city}, {city.country}
        </h1>
        <p className="text-lg mt-6 max-w-2xl text-center bg-black/50 p-4 rounded-2xl italic">
          {city.description ||
            "A wonderful city full of amazing places to visit."}
        </p>
        <Link
          to="/cities"
          className="inline-flex items-center mt-4 bg-blue-600 hover:bg-blue-800
        font-lg px-3 py-1 rounded-lg"
        >
          <FaArrowLeft className="mr-2" />
          Back to cities
        </Link>
      </div>

      {/* Itinerarios */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Itineraries
        </h2>

        {itineraries && itineraries.length > 0 ? (
          <div className="flex flex-col gap-8 justify-center items-center">
            {/* Cards de itinerarios */}
            {itineraries.map((itinerary, index) => (
              <div key={index} className="bg-gray-100 w-1/3 rounded-xl shadow-2xl pb-2">
                <img
                  src={itinerary.image}
                  alt={itinerary.title}
                  className="w-full h-58 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-sans font-semibold text-center text-gray-900 mb-2 px-6">
                  {itinerary.title}
                </h3>

                {/* Seccion de usarios e informacion del itinerario */}
                <div className="flex">

                  {/* Foto y nombre del usuario */}
                  <div className="w-full flex  justify-center items-center gap-2 mb-2 px-2">
                    <img
                      src={itinerary.user?.photo}
                      alt="User"
                      className="w-15 h-15 rounded-full"
                    />
                    <span className="text-md text-center font-sans text-gray-700">
                      {itinerary.user?.name_user}
                    </span>
                  </div>

                  {/* Precio y duracion del itinerario */}
                  <div className="w-full flex justify-end space-x-4 px-4 mt-4 font-semibold">
                    <p className="text-gray-700 mb-1">
                      <FaMoneyBill1Wave className="inline-block mr-2 text-green-700" />
                      {itinerary.price} USD
                    </p>
                    <p className="text-gray-700 mb-3">
                      <FaClock className="inline-block mr-2" />
                      {itinerary.duration} hrs
                    </p>
                  </div>
                </div>

                {/* Iterando arreglos de hashtags */}
                <div className="flex justify-center items-center mb-4 font-bold text-white">
                  {itinerary.hashtags.map((tag, i) => (
                    <span
                      className="flex items-center m-1 rounded-full px-4 py-2 bg-blue-600 hover:bg-blue-700"
                      key={i}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Boton de ver actividades */}
                <div className="flex justify-center items-center mb-2">
                  <button
                    onClick={() =>
                      setShowDetails((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))
                    }
                    className="mt-auto bg-gray-600 hover:bg-gray-800 text-white py-1 px-3 rounded
                     transition cursor-pointer font-semibold"
                  >
                    Activities
                  </button>
                </div>

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
  );
}

export default CityDetails;
