import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className=" h-screen w-full mt-4 sm:mt-8">
      <div>
        <div className="flex flex-col items-center justify-center ">
          <p className="text-[#804B56] font-semibold text-[1.5em] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
            Our Story
          </p>
          <p className="font-bold text-gray-600 mt-6 text-2xl sm:text-5xl lg:text-6xl">
            From A Passion For Painting
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-4 sm:mt-8 md:mt-24 lg:ml-16 ">
          <div className="flex items-center justify-center md:justify-start flex-wrap font-serif px-4 sm:px-20 md:px-4 lg:px-12 sm:text-lg md:text-xl lg:text-2xl md:w-1/2">
            <p>
              Brush Work was founded with simple mission to deliver high-quality
              painting and decorating services a professional touch.
              <br />
              Brush Work is a detail-obsessed decorating team. We believe in
              quality over shortcuts. We specialize in transforming homes with
              flawless finishes, crisp edges, and a promise to leave your space
              spotless. We don't just paint—we craft spaces with care, ensuring
              every room looks and feels completely finished.
            </p>
            <div className="mt-4 hidden md:flex">
              <Link to={"/services"}>
                <button className="border  px-2 py-2 rounded-sm bg-[#804B56] text-[linen] text-sm sm:text-lg md:text-xl hover:bg-[linen] hover:text-[#804B56] hover:border-[#804B56] duration-300">
                  View Our Services
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center px-4 sm:px-8 md:px-0 mt-4 sm:mt-6 md:mt-0">
            <img
              className="border-0 rounded-xl size-70 sm:size-95 md:size-90  lg:ml-20"
              src="\paint-roller.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
