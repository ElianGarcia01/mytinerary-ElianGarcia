import backgroundCities from "../assets/images/backgroundCities.jpg";

export default function Cities() {
    return (
        <>
            <section className="h-[100vh] md:h-[110vh] font-stretch-normal relative">
                <img src={backgroundCities} alt="" className="h-full w-full shadow-2xl object-cover" />

                <div className="absolute inset-0 bg-black/35 md:bg-black/25"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    
                    <h1 className="text-gray-100 font-stretch-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg mb-8">
                        En mantenimiento
                    </h1>

                    {/* Círculo de carga (skeleton) */}
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </section>
        </>
    );
}