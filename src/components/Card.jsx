const Card = ({ title, description, price, logo }) => {
  return (
    <div className="card">
      <div className="flex flex-col items-start justify-center w-80 md:w-90 lg:w-105 h-84 gap-2 mt-12 text-lg font-semibold border border-[#804B56] lg:border-mist-400 p-8 rounded-lg lg:hover:scale-105 hover:border-[#804B56] transition-transform duration-300 lg:ease-in-out">
        <span className="text-[#804B56] text-2xl sm:text-3xl lg:text-4xl">
          {logo}
        </span>
        <p className="text-[#804B56] font-bold text-2xl pb-4">{title}</p>
        <p className="text-mist-600 text-lg mt-2 mb-2">{description}</p>
        <p className="text-amber-800">{price}</p>
      </div>
    </div>
  );
};

export default Card;
