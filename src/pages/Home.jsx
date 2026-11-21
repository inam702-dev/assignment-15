import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="flex flex-col pt-12 md:py-16 lg:py-32 px-4 w-full h-screen">
      <div className="sm:w-full sm:flex sm:justify-center ">
        <div className="size-80 h-60 md:hidden sm:h-70 sm:w-100 ">
          <img
            className="border-hidden rounded-lg "
            src="\modern-living-room.webp"
            alt="A refined modern living room with a neutral color palette, comfortable seating, and elegant decor, arranged in a bright and welcoming interior with a calm, cozy atmosphere."
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col md:w-2/3 lg:w-1/2 md:justify-center lg:pl-6 sm:pl-20 sm:pr-8 md:px-0 ">
          {" "}
          <div className="flex flex-wrap">
            <p className="text-2xl sm:text-4xl md:text-3xl lg:text-5xl font-semibold pb-4 text-[#274666]">
              Spaces crafted with care, not just coated and painted.
            </p>
            <p className="text-mist-700 font-serif sm:text-lg md:text-xl lg:text-2xl sm:w-140 md:w-110 lg:w-170 ">
              Combining eighteen years of dedication with flawless execution.
              Experience professional home painting that values cleanliness as
              much as stunning design.We focus on the details that others miss,
              ensuring a flawless finish and leaving your space immaculate every
              single time.
            </p>{" "}
          </div>
          <div className=" flex flex-row pt-8 gap-x-4 ">
            <Link to={"/contact"}>
              <button className="border  px-2 py-2 rounded-sm bg-[#804B56] text-[linen] text-sm sm:text-lg md:text-xl hover:bg-[linen] hover:text-[#804B56] hover:border-[#804B56] duration-300">
                Get In Touch
              </button>
            </Link>
            <Link to={"/gallery"}>
              <button className="border  px-2 py-2 rounded-sm bg-[#804B56] text-[linen] text-sm sm:text-lg md:text-xl hover:bg-[linen] hover:text-[#804B56] hover:border-[#804B56] duration-300">
                See Recent Work
              </button>
            </Link>
          </div>
        </div>
        <div className="  hidden md:flex md:pl-8 lg:ml-8 ">
          <img
            className=" size-120 lg:size-150 h-66 lg:h-110 border-hidden rounded-lg"
            src="\modern-living-room.webp"
            alt="A refined modern living room with a neutral color palette, comfortable seating, and elegant decor, arranged in a bright and welcoming interior with a calm, cozy atmosphere."
          />
        </div>
      </div>
    </div>
  );
}

export default Home