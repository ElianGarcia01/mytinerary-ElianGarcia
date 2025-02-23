import Carousel from "../components/Carousel"
import "./Home.css"


export default function Home() {
    return (
        <>
            <div className="home-background flex flex-col justify-center items-center relative">
            </div>
            <section className="space-y-8 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-gray-100 font-bold text-6xl">My Tineraries</h1>
                <p className="text-gray-100 text-3xl font-sans font-extralight">
                    Find your perfect trip, designed by insiders who know and love their cities!
                </p>
                <a href="" className="text-gray-100 text-2xl bg-slate-900/10 hover:bg-slate-700/30 backdrop-blur-md p-5 rounded-xl font-serif">
                    Explore Now!
                </a>
            </section>


            {/* CALL ACTION */}
            <div className="h-[90vh] bg-slate-900 flex justify-center items-center">
                <div className="flex justify-center items-center space-x-12">
                    <div className="bg-gray-700 h-[70vh] w-96 p-8 rounded-lg flex flex-col justify-center space-y-14">
                        <h4 className="text-gray-300 text-center text-4xl font-bold">Find the perfect destination</h4>
                        <p className="text-gray-300 text-2xl">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                        <button className="bg-blue-700 hover:bg-blue-600/85 transition text-gray-300 p-3 rounded-lg font-bold text-xl cursor-pointer">View More</button>
                    </div>
                </div>
                <div className="h-[90vh]">
                <Carousel></Carousel>
                </div>
            </div>
        </>
    )
}