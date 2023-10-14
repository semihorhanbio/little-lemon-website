
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <nav className=" max-w-[1100px] w-[1100px]   flex py-6 justify-between  items-center ">
      <img
        className="w-[224px] h-[52px]  cursor-pointer inline object-contain "
        src="./icons_assets/Logo.svg"
        alt="Little Lemon Logo"
      ></img>
      <ul className="lg:pr-[0px] list-none sm:flex hidden justify-end items-center md:pr-[16px] ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-bold hover:text-yellow-primary transition-all duration-200 ease-in cursor-pointer text-sm md:text-[16px] lg:text-[18px]  ${
              index === navLinks.length - 1 ? "mr-0" : "mr-8 sm:mr-2 md:mr-4"
            }`}
          >
            <Link
              to={
                nav.title === "Home"
                  ? "/"
                  : "" || nav.title === "Reservations"
                  ? "/booking"
                  : ""
              }
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* <div className="sm:hidden md:hidden flex flex-1 justify-end items-center ">
        <img
          onClick={() => setToggle((prev) => !prev)}
          src={
            toggle
              ? "./icons_assets/close.svg"
              : "./icons_assets/🦆 icon _hamburger menu.svg"
          }
          alt="menu"
          className="w-[28px] h-[28px] object-contain text-black fill-black stroke-black "
        ></img>
      </div> */}
    </nav>
  );
};

export default Nav;
