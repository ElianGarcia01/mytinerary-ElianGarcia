import Carousel from "../components/Carousel"
import "./Home.css"
import Rowing from "../assets/images/Rowing.jpg"
import HomeBackground from "../assets/images/HomeBackground.jpg"
import { useNavigate } from "react-router-dom"

export default function Home() {

    const navigate = useNavigate()

    function handleNavigate() {
        navigate("/cities")
    }

    return (
        <>
            {/* HERO SECTION */}
            <section className="h-screen max-h-[100vh] w-full object-cover">
                <img src={HomeBackground} alt="" className="h-full w-full shadow-2xl object-cover" />

                <div className="absolute inset-0 bg-black/35 md:bg-black/25"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center space-y-12 sm:space-y-16">
                    <h1 className="text-gray-100 font-stretch-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">My Tineraries</h1>
                    <p className="text-gray-200 text-lg sm:text-2xl md:text-3xl font-stretch-ultra-expanded max-w-xl mx-auto drop-shadow-md italic">
                        Find your perfect trip, designed by insiders who know and love their cities!
                    </p>
                    <button onClick={handleNavigate} className="text-black mt-8 text-xl w-48 bg-white/90 hover:bg-white transition px-6 py-3
                    rounded-lg font-bold shadow-lg blink-effect cursor-pointer">
                        Explore Now!
                    </button>
                </div>
            </section>


            {/* MAIN CONTENT */}
            <div className="w-full py-12 space-y-16 bg-white text-black flex flex-col justify-between items-center">

                {/* CAROUSEL POPULAR ITINERARIES */}
                <section className="text-center rounded-2xl container shadow-2xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-black">Popular Itineraries</h2>
                    <div>
                        <Carousel />
                    </div>
                </section>

                {/* FEATURED DESTINATIONS */}
                <section className="rounded-2xl container shadow-2xl p-6 w-full">
                    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl mb-8">Top Destinations</h2>
                    <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-4">
                        <div className="flex flex-col gap-8 mt-8 text-center">
                            <div className="bg-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-gray-800">Paris, France</h3>
                                <p className="text-gray-600">Explore the city of love with its rich culture and breathtaking landmarks.</p>
                            </div>
                            <div className="bg-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-gray-800">Tokyo, Japan</h3>
                                <p className="text-gray-600">Discover a perfect blend of modernity and tradition in Japan’s capital.</p>
                            </div>
                            <div className="bg-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-gray-800">New York, USA</h3>
                                <p className="text-gray-600">Experience the city that never sleeps with its iconic skyline and vibrant culture.</p>
                            </div>
                        </div>
                        <div className="w-full max-w-[18rem] md:max-w-[24rem] flex justify-center items-center">
                            <img src={Rowing} alt="" className="rounded-xl h-full w-72 object-center shadow-2xl" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
