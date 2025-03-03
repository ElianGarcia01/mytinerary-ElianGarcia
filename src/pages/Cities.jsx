import backgroundCities from "../assets/images/CitiesBackground.jpg"

export default function Cities() {
    return (
        <>
            <section className="h-[100vh] font-stretch-normal relative">
                <img src={backgroundCities} alt="" className="h-full w-full shadow-2xl object-cover" />

                <div className="absolute inset-0 bg-black/35"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center">

                    <h1 className="text-gray-100 font-stretch-normal text-2xl md:text-5xl mb-8">
                        Under Maintance
                    </h1>

                    {/* Círculo de carga (skeleton) */}
                    <div className="w-8 h-8 md:w-12 md:h-12 border-4 border-gray-200 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </section>
        </>
    )
}