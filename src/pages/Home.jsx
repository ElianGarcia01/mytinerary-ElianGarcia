import Carousel from "../components/Carousel"
import "./Home.css"


export default function Home() {
    return (
        <>

            {/* CALL ACTION */}
            <div className="home-background flex flex-col justify-center items-center relative">
            </div>
            <section className="space-y-8 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-gray-100 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">My Tineraries</h1>
                <p className="text-gray-100 text-xl sm:text-2xl md:text-3xl font-sans font-extralight">
                    Find your perfect trip, designed by insiders who know and love their cities!
                </p>
                <a href="" className="text-gray-100 text-md sm:text-2xl bg-slate-900/10 hover:bg-slate-700/30 backdrop-blur-md p-5 rounded-xl font-serif">
                    Explore Now!
                </a>
            </section>


            {/* SECCION MAIN HOME */}
            <div className=" bg-[#fff1de]">

                <div className="min-h-screen flex flex-col-reverse lg:max-h-screen lg:flex-row lg:justify-center lg:space-x-6 lg:items-center">

                    {/* CARD */}
                    <div className="bg-[#ffe4bc] h-full w-96 p-8 rounded-xl flex flex-col justify-center space-y-14 mt-16">
                        <h4 className=" text-center text-4xl font-bold">Find the perfect destination</h4>
                        <p className=" text-2xl">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                        <button className="bg-blue-700 hover:bg-blue-600/85 transition text-white p-3 rounded-lg font-bold text-xl cursor-pointer">View More</button>
                    </div>

                    {/* CAROUSEL */}
                    <div className="h-full">
                        <h2 className="text-center font-bold text-3xl text-[#2E4A38]">Popular Tineraries</h2>
                        <Carousel></Carousel>
                    </div>
                </div>

            </div>
        </>
    )
}