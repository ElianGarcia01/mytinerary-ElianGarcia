import Carousel from "../components/Carousel"
import "./Home.css"
import Rowing from "../assets/images/Rowing.jpg"
import HomeBackground from "../assets/images/HomeBackground.jpg"

export default function Home() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="h-[100vh] md:h-[110vh] font-stretch-normal relative">
                <img src={HomeBackground} alt="" className="h-full w-full shadow-2xl object-cover" />

                <div className="absolute inset-0 bg-black/35 md:bg-black/25"></div>

                <div className=" text-center absolute top-56 md:top-36 md:right-10 flex flex-col justify-self-start items-center space-y-24 md:space-y-20">
                    <h1 className="text-gray-100 font-stretch-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">My Tineraries</h1>
                    <p className="text-gray-200 text-lg sm:text-2xl md:text-3xl font-stretch-ultra-expanded max-w-xl mx-auto drop-shadow-md italic">
                        Find your perfect trip, designed by insiders who know and love their cities!
                    </p>
                    <a href="" className="text-black mt-8 text-xl w-48 bg-white/90 transition px-6 py-3
                    rounded-lg font-bold shadow-lg blink-effect">
                        Explore Now!
                    </a>
                </div>
            </section>


            {/* MAIN CONTENT */}
            <div className="w-full py-12 space-y-16 bg-white text-black flex flex-col justify-between items-center">

                {/* CAROUSEL POPULAR ITINERARIES */}
                <section className="text-center rounded-2xl container shadow-2xl">
                    <h2 className="text-4xl text-black">Popular Itineraries</h2>
                    <div className="mt-6">
                        <Carousel />
                    </div>
                </section>

                {/* FEATURED DESTINATIONS */}
                <section className="rounded-2xl container shadow-2xl p-6 w-full">
                    <h2 className="text-center text-4xl mb-8">Top Destinations</h2>
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
                        <div className="w-2xl md:w-1/2 flex justify-center items-center">
                            <img src={Rowing} alt="" className="rounded-xl h-full w-72 object-center shadow-2xl" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
