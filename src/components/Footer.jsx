import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="flex justify-between sm:justify-evenly px-2 py-2 h-[20vh] lg:h-[26vh] border-t  border-t-gray-400">
      <div>
        <p className="font-bold text-[#804B56] sm:text-[1.8rem] md:text-[2rem] mb-1">
          Brush Work
        </p>
        <p className="text-[0.6rem] sm:text-[1rem] md:text-[1.1rem] font-semibold">
          Painters & Decorators
        </p>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold mb-2 sm:text-[1.3rem] md:text-[1.5rem]">
          Quick Links
        </p>
        <Link
          className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem]"
          to={"/"}>
          Home
        </Link>
        <Link
          className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem]"
          to={"about"}>
          About
        </Link>
        <Link
          className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem]"
          to={"/services"}>
          Services
        </Link>
        <Link
          className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem]"
          to={"/gallery"}>
          Gallery
        </Link>
        <Link
          className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem]"
          to={"/contact"}>
          Contact
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-col">
        <p className="font-semibold mb-1 sm:text-[1.3rem] md:text-[1.5rem]">
          Our Services
        </p>
        <Link
          className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem]"
          to={"/services"}>
          Interior Painting
        </Link>
        <Link
          className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem]"
          to={"/services"}>
          Exterior Painting
        </Link>
        <Link
          className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem]"
          to={"/services"}>
          Wallpapering
        </Link>
        <Link
          className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem]"
          to={"/services"}>
          Woodwork
        </Link>
      </div>
      <div className="flex flex-col pl-4">
        <p className="font-semibold mb-2 sm:text-[1.3rem] md:text-[1.5rem]">
          Get In Touch
        </p>
        <p className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem]">
          Edinburgh,EH1,6AA
        </p>
        <p className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem]">
          +441315580167
        </p>
        <p className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.2rem]">
          hello@brushwork.co.uk
        </p>
      </div>
    </div>
  );
}

export default Footer