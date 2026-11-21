import { Link } from "react-router-dom";
import { LiaBrushSolid } from "react-icons/lia";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#804B56] z-100 ">
      <div className="flex  items-center justify-between h-12 sm:h-16 text-[linen] pl-6 sm:px-12 md:px-14 lg:px-18  ">
        <div className="flex items-center justify-center ">
          <Link className="mr-auto" to={"/"}>
            <p className="text-[#d6c7ad] text-xl font-bold sm:text-2xl md:text-3xl flex items-center ">
              <LiaBrushSolid className="text-xl sm:text-2xl md:text-3xl " />{" "}
              Brush Work
            </p>
          </Link>
        </div>
        <button
          className="md:hidden pr-6 text-2xl sm:text-3xl"
          onClick={() => setIsOpen(!isOpen)}>
          <AiOutlineMenu />
        </button>

        <div className=" gap-8 text-xl hidden md:flex md:flex-row ">
          <Link to={"/"}>
            <p className="hover:text-white">Home </p>
          </Link>
          <Link to={"/about"}>
            <p className="hover:text-white">About</p>
          </Link>
          <Link to={"/services"}>
            <p className="hover:text-white">Services</p>
          </Link>
          <Link to={"/gallery"}>
            <p className="hover:text-white">Gallery</p>
          </Link>
          <Link to={"/contact"}>
            <p className="hover:text-white">Contact</p>
          </Link>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} gap-2 py-2 border-t text-xl md:hidden flex flex-col items-center bg-[#804B56] text-[linen] z-1000 `}>
        <Link to={"/"}>
          <p className="hover:text-white block">Home </p>
        </Link>
        <Link to={"/about"}>
          <p className="hover:text-white block">About</p>
        </Link>
        <Link to={"/services"}>
          <p className="hover:text-white block">Services</p>
        </Link>
        <Link to={"/gallery"}>
          <p className="hover:text-white block">Gallery</p>
        </Link>
        <Link to={"/contact"}>
          <p className="hover:text-white block">Contact</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
