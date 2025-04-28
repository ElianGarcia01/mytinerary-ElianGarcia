import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../Carousel/Carousel.css"
import Eiffel from "../../assets/carousel/Eiffel.jpg"
import BigBen from "../../assets/carousel/BigBen.jpg"
import Coliseo from "../../assets/carousel/Coliseo.jpg"
import Estatua from "../../assets/carousel/Estatua.jpg"
import TorreTokio from "../../assets/carousel/TorreTokio.jpg"
import MachuPicchu from "../../assets/carousel/MachuPicchu.jpg"
import BurjKhalifa from "../../assets/carousel/BurjKhalifa.jpg"
import OperaSidney from "../../assets/carousel/ÓperaSídney.jpg"
import SagradaFamilia from "../../assets/carousel/SagradaFamilia.jpg"
import TajMahal from "../../assets/carousel/TajMahal.jpg"
import CristoRedentor from "../../assets/carousel/CristoRedentor.jpg"
import GranMuralla from "../../assets/carousel/GranMuralla.jpg"

const itineraries = [
  { id: 1, image: Eiffel, name: "Torre Eiffel, París", likes: 120 },
  { id: 2, image: BigBen, name: "Big Ben, Londres", likes: 95 },
  { id: 3, image: Coliseo, name: "Coliseo, Roma", likes: 110 },
  { id: 4, image: Estatua, name: "Estatua de la Libertad, NY", likes: 150 },
  { id: 5, image: TorreTokio, name: "Torre de Tokio", likes: 88 },
  { id: 6, image: OperaSidney, name: "Ópera de Sídney", likes: 130 },
  { id: 7, image: MachuPicchu, name: "Machu Picchu, Cusco", likes: 200 },
  { id: 8, image: BurjKhalifa, name: "Burj Khalifa, Dubái", likes: 140 },
  { id: 9, image: SagradaFamilia, name: "Sagrada Familia, Barcelona", likes: 115 },
  { id: 10, image: TajMahal, name: "Taj Mahal, Agra", likes: 180 },
  { id: 11, image: CristoRedentor, name: "Cristo Redentor, Río", likes: 160 },
  { id: 12, image: GranMuralla, name: "Gran Muralla China", likes: 170 },
];

const Carousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-2 h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={2}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          1024: {
            slidesPerView: 4, // En pantallas grandes, 4 imágenes por slide
            slidesPerGroup: 4, // Mueve 4 imágenes por grupo
          },
        }}
        className="w-full h-full"
      >
        {itineraries.map((item) => (
          <SwiperSlide key={item.id} className="px-10 py-8">
            <div className="relative w-full h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-md">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-96 object-cover rounded-xl"
              />
              <button className="absolute bottom-0 left-0 bg-black text-white px-2 py-1 rounded-bl-xl rounded-tr-2xl cursor-pointer">
                {item.name}
              </button>
              <button className="absolute top-0 right-0 bg-black/50 text-white px-2 py-1 rounded-tr-xl rounded-bl-2xl cursor-pointer">
                ❤️ {item.likes}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
