import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../components/Carousel.css"
import Eiffel from "../assets/itineraries/Eiffel.jpg"
import BigBen from "../assets/itineraries/BigBen.jpg"
import Coliseo from "../assets/itineraries/Coliseo.jpg"
import Estatua from "../assets/itineraries/Estatua.jpg"
import TorreTokio from "../assets/itineraries/TorreTokio.jpg"
import MachuPicchu from "../assets/itineraries/MachuPicchu.jpg"
import BurjKhalifa from "../assets/itineraries/BurjKhalifa.jpg"
import ÓperaSídney from "../assets/itineraries/ÓperaSídney.jpg"
import SagradaFamilia from "../assets/itineraries/SagradaFamilia.jpg"
import TajMahal from "../assets/itineraries/TajMahal.jpg"
import CristoRedentor from "../assets/itineraries/CristoRedentor.jpg"
import GranMuralla from "../assets/itineraries/GranMuralla.jpg"


const itineraries = [
  {
    id: 1,
    image: Eiffel,
    name: "Torre Eiffel, París",
    likes: 120,
  },
  {
    id: 2,
    image: BigBen,
    name: "Big Ben, Londres",
    likes: 95,
  },
  {
    id: 3,
    image: Coliseo,
    name: "Coliseo, Roma",
    likes: 110,
  },
  {
    id: 4,
    image: Estatua,
    name: "Estatua de la Libertad, Nueva York",
    likes: 150,
  },
  {
    id: 5,
    image: TorreTokio,
    name: "Torre de Tokio, Tokio",
    likes: 88,
  },
  {
    id: 6,
    image: ÓperaSídney,
    name: "Ópera de Sídney, Sídney",
    likes: 130,
  },
  {
    id: 7,
    image: MachuPicchu,
    name: "Machu Picchu, Cusco",
    likes: 200,
  },
  {
    id: 8,
    image: BurjKhalifa,
    name: "Burj Khalifa, Dubái",
    likes: 140,
  },
  {
    id: 9,
    image: SagradaFamilia,
    name: "Sagrada Familia, Barcelona",
    likes: 115,
  },
  {
    id: 10,
    image: TajMahal,
    name: "Taj Mahal, Agra",
    likes: 180,
  },
  {
    id: 11,
    image: CristoRedentor,
    name: "Cristo Redentor, Río de Janeiro",
    likes: 160,
  },
  {
    id: 12,
    image: GranMuralla,
    name: "Gran Muralla China, Beijing",
    likes: 170,
  },
];

const groupItineraries = (items, size) => {
  const groups = []
  for (let i = 0; i < items.length; i += size) {
    groups.push(items.slice(i, i + size))
  }
  return groups
}

const groupedItineraries = groupItineraries(itineraries, 4)

const Carousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-8 h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // Un slide visible a la vez
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Configura el autoplay
        className="w-full h-full"
      >
        {groupedItineraries.map((group, index) => (
          <SwiperSlide key={index} className="px-8 py-6">
            <div className="grid grid-cols-4 gap-6 h-full">
              {group.map((item) => (
                <div key={item.id} className="relative h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
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
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel
