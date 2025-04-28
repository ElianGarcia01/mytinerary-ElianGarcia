import { FaFaceSadTear } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import getCities from "../../redux/actions/cityAction";
import { useDispatch } from "react-redux";
import Card from "./Card";
import changeSearch from "../../redux/actions/searchAction";

function ContainerCard() {
  // Despachar la accion asincrona getCities
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  // Estados globales
  const { cities, status } = useSelector((state) => state.city);

  const { search } = useSelector((state) => state.search);

  // Filtro de busqueda por texto
  const searchCity = (text) => {
    return cities.filter((city) =>
      city.name_city.toLowerCase().includes(text.toLowerCase())
    );
  };

  const filteredCities = searchCity(search);

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
            onChange={(e) => dispatch(changeSearch(e.target.value))}
          />
        </div>
      </div>

      {/* Skeleton mientras carga la API */}
      {status === "pending" ? (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCities.length === 0 ? (
            <div className="col-span-full flex justify-center items-center w-full h-64">
              <p className="text-black text-center text-2xl font-semibold">
                No cities found, try another search.
                <FaFaceSadTear className="text-black text-2xl ml-3 inline-block animate-ping" />
              </p>
            </div>
          ) : (
            filteredCities.map((city) => (
              <Card key={city._id} city={city}></Card>
            ))
          )}
        </div>
      )}
    </section>
  );
}

export default ContainerCard;
