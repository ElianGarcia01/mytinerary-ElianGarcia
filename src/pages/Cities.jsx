
import backgroundCities from "../assets/images/backgroundCities.jpg"

export default function Cities() {
    return (
        <>
            <div className="min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundCities})` }}>
                <p>HOLA SOY LA PAGINA CITIES</p>
            </div>
        </>
    )
}