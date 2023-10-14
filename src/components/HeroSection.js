import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className=" bg-gray-primary  relative">
      <div className="lg:max-w-[1100px] mr-auto ml-auto px-[18px] md:px-[16px] py-8  lg:px-[0px]">
        <h1 className="text-7xl text-yellow-primary font-markazi">
          Little Lemon
        </h1>
        <h2 className="text-5xl text-white-highlight font-markazi -mt-2">
          Chicago
        </h2>
        <p className="text-white-highlight text-left mt-4 mb-6 font-medium text-xl w-1/1 md:w-5/12 lg:w-1/4 ">
          We are family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link
          to="/booking"
          className=" hover:shadow-md hover:bg-yellow-300 transition-all duration-200 ease-in text-black-highlight font-bold text-xl bg-yellow-primary px-6 py-3 rounded-2xl mt-3"
        >
          Reserve a Table
        </Link>
      </div>
      <img
        className="hidden md:block w-[260px] h-[300px] lg:w-[380px] lg:h-[420px] absolute md:right-[20px] md:bottom-3 lg:right-[220px] lg:-bottom-16 object-cover  rounded-xl"
        src="./icons_assets/restauranfood.jpg"
        alt="Restaurant Food"
      ></img>
    </section>
  );
}
