import Card from "../components/Card/Card";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Cities() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="h-[60vh] font-stretch-normal bg-cover bg-center bg-[url('./assets/images/cities3.jpg')] relative">
        <div className="absolute inset-0 bg-black/35 md:bg-black/55"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        text-center flex flex-col items-center space-y-3">
          <h2 className="text-white text-4xl font-bold">Cities</h2>

          <p className="text-white text-2xl italic">
            Collection of the most beautiful <br />
            places and experience
          </p>
        </div>
      </section>

        {/* CARDS SECTIONS */}
      <section className="bg-white min-h-screen">
        <SearchBar></SearchBar>

        <div>
            <Card></Card>
        </div>
      </section>
    </>
  );
}
