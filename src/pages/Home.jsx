import Carousel from "../components/Carousel"
import "./Home.css"
import Rowing from "../assets/images/Rowing.jpg"

export default function Home() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="home-background md:h-[110vh] flex flex-col justify-center items-center h-screen font-stretch-normal">
                <div className="space-y-24 text-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-gray-100 font-stretch-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">My Tineraries</h1>
                    <p className="text-gray-200 text-lg sm:text-2xl md:text-3xl font-stretch-ultra-expanded max-w-xl mx-auto drop-shadow-md italic">
                        Find your perfect trip, designed by insiders who know and love their cities!
                    </p>
                    <a href="#" className="text-white text-lg sm:text-xl bg-gray-200/10 hover:bg-black transition px-6 py-3 rounded-lg font-semibold shadow-lg">
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
                    <div className="flex flex-row-reverse justify-center gap-4">
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
                        <div className="w-1/2 flex justify-center items-center">
                            <img src={Rowing} alt="" className="rounded-xl h-full w-72 object-center" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
