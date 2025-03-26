import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="relative max-w-lg mx-auto my-8 w-full">
      <div className="flex items-center border-2 border-gray-300 rounded-full px-5 py-3 bg-white shadow-md hover:shadow-lg transition-all duration-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300">
        <FiSearch className="text-gray-500 mr-3" size={20} />
        <input
          type="text"
          placeholder="Search for a city..."
          className="w-full outline-none text-gray-700 placeholder-gray-500 bg-transparent"
        />
      </div>
    </div>
  );
}

export default SearchBar;
