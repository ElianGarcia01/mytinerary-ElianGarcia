import Card from "../components/Card/Card"
import { FaTreeCity } from "react-icons/fa6"

export default function Cities() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="h-[60vh] font-stretch-normal bg-cover bg-center bg-[url('./assets/images/BannerCities.jpg')] relative">
        <div className="absolute inset-0 bg-black/35 md:bg-black/55"></div>

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        text-center flex flex-col items-center space-y-3"
        >
          <h2 className="text-white text-4xl font-bold">Cities</h2>

          <p className="text-white text-2xl italic">
            Collection of the most beautiful <br />
            places and experience
          </p>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="bg-gray-200 min-h-screen">
        <h2 className="text-center text-4xl font-bold pt-12 text-gray-800 tracking-wide flex items-center justify-center gap-3">
          Find Amazing Cities
          <FaTreeCity className="text-blue-600 animate-pulse" />
        </h2>
        <p className="text-center text-lg text-gray-600 mt-4 px-6">
          Explore the world&apos;s most beautiful cities and find your next
          adventure.
        </p>
        <Card />
      </section>
    </>
  )
}
