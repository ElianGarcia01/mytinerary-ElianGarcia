import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/Carousel.css"


const itineraries = [
  {
    id: 1,
    image: "https://www.celebritycruises.com/blog/content/uploads/2023/03/most-modern-cities-in-the-world-new-york-city-hero.jpg",
    name: "Matira Beach",
    likes: 33,
  },
  {
    id: 2,
    image: "https://www.celebritycruises.com/blog/content/uploads/2023/03/most-modern-cities-in-the-world-new-york-city-hero.jpg",
    name: "Veligandu Island Beach",
    likes: 28,
  },
  {
    id: 3,
    image: "https://www.celebritycruises.com/blog/content/uploads/2023/03/most-modern-cities-in-the-world-new-york-city-hero.jpg",
    name: "Adventure Time",
    likes: 28,
  },
  {
    id: 4,
    image: "https://www.celebritycruises.com/blog/content/uploads/2023/03/most-modern-cities-in-the-world-new-york-city-hero.jpg",
    name: "Tsunami Monument",
    likes: 27,
  },
  {
    id: 5,
    image: "https://www.celebritycruises.com/blog/content/uploads/2023/03/most-modern-cities-in-the-world-new-york-city-hero.jpg",
    name: "Bora Bora",
    likes: 40,
  },
  {
    id: 6,
    image: "https://www.celebritycruises.com/blog/content/uploads/2023/03/most-modern-cities-in-the-world-new-york-city-hero.jpg",
    name: "Maya Bay",
    likes: 35,
  },
  {
    id: 7,
    image: "https://www.celebritycruises.com/blog/content/uploads/2023/03/most-modern-cities-in-the-world-new-york-city-hero.jpg",
    name: "Whitehaven Beach",
    likes: 38,
  },
  {
    id: 8,
    image: "https://www.celebritycruises.com/blog/content/uploads/2023/03/most-modern-cities-in-the-world-new-york-city-hero.jpg",
    name: "Anse Lazio",
    likes: 36,
  },
  {
    id: 9,
    image: "https://www.celebritycruises.com/blog/content/uploads/2023/03/most-modern-cities-in-the-world-new-york-city-hero.jpg",
    name: "Navagio Beach",
    likes: 42,
  },
  {
    id: 10,
    image: "https://www.celebritycruises.com/blog/content/uploads/2023/03/most-modern-cities-in-the-world-new-york-city-hero.jpg",
    name: "Pink Sands Beach",
    likes: 39,
  },
  {
    id: 11,
    image: "https://www.celebritycruises.com/blog/content/uploads/2023/03/most-modern-cities-in-the-world-new-york-city-hero.jpg",
    name: "Seven Mile Beach",
    likes: 37,
  },
  {
    id: 12,
    image: "https://www.celebritycruises.com/blog/content/uploads/2023/03/most-modern-cities-in-the-world-new-york-city-hero.jpg",
    name: "Baia do Sancho",
    likes: 41,
  },
];

const groupItineraries = (items, size) => {
  const groups = [];
  for (let i = 0; i < items.length; i += size) {
    groups.push(items.slice(i, i + size));
  }
  return groups;
};

const groupedItineraries = groupItineraries(itineraries, 4);

const Carousel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1} // Un slide visible a la vez
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {groupedItineraries.map((group, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="grid grid-cols-2 gap-4">
              {group.map((item) => (
                <div key={item.id} className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 rounded">
                    {item.name}
                  </div>
                  <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded">
                    ❤️ {item.likes}
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
