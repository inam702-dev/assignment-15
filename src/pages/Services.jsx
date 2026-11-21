import Card from "../components/Card";
import { FaHouseUser } from "react-icons/fa";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { MdOutlineWallpaper } from "react-icons/md";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div className="sm:h-screen">
      <div className="flex items-center justify-center pt-4">
        <p className="text-[#804B56] font-bold text-2xl sm:text-3xl lg:text-4xl underline-offset-4 underline decoration-1 ">
          What We Offer
        </p>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap h-[200vh] sm:h-[50vh] lg:h-[90vh] sm:gap-x-8 sm:px-12 lg:px-28 items-center sm:items-baseline sm:justify-center">
        <div>
          <Card
            logo={<FaHouseUser />}
            title="Interior painting"
            description="Expert painting for walls, ceilings, and woodwork. Includes thorough prep and two full coats."
            price="From $280 A Room"
          />
        </div>
        <Card
          logo={<FaHouseCircleCheck />}
          title="Exterior painting"
          description="Render, masonry, sash windows and front doors, weather permitting and scaffolded where needed."
          price="From $1400"
        />
        <Card
          logo={<MdOutlineWallpaper />}
          title="Wallpapering"
          description="Flawless installation and lining with exact pattern matching, tailored for both heavy and delicate wallpapers."
          price="From $180 A Wall"
        />
        <Card
          logo={<MdOutlinePublishedWithChanges />}
          title="Woodwork & restoration"
          description="Sash window repair and woodwork restoration, including stripping and repainting."
          price={
            <Link to={"/contact"}>
              {" "}
              <button> Contact Us For Price</button>
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default Services;
