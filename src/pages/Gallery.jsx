const Gallery = () => {
  return (
    <div className="bg-[linen] h-screen sm:h-[120vh] md:h-[130vh] lg:h-[220vh] w-full">
      <div className="flex justify-center mt-12">
        <p className="text-[1.5rem] sm:text-[2.4rem] md:text-[2.7rem] lg:text-[3rem] font-bold text-[#804B56]">
          Recently Finished
        </p>
      </div>
      <div className="flex flex-row flex-wrap py-2 sm:py-4 lg:py-16 justify-center gap-x-4 sm:gap-x-6">
        <div className="mt-4 mb-6 overflow-hidden ">
          <img
            className="size-40 sm:size-80 md:size-90 lg:size-110 border-0 rounded-md my-2 sm:my-6 lg:my-8  transition-transform object-cover duration-500 hover:scale-[1.03]  "
            src="\hallway.jpg"
            alt="A hallway inside a home, providing a passage between rooms."
            fetchPriority="high"
          />
          <p className="text-[0.5rem] sm:text-[0.8rem] md:text-[1rem] font-semibold">
            HALLWAY IN TERRACOTTA
          </p>
        </div>
        <div className="mt-4 mb-6 overflow-hidden">
          <img
            className="size-40 sm:size-80 md:size-90 lg:size-110 border-0 rounded-md my-2 sm:my-6 lg:my-8 transition-transform object-cover duration-500 hover:scale-[1.03]"
            src="\bedroom.webp"
            alt="A neatly arranged bedroom with a bed, soft furnishings, and a calm, restful atmosphere."
            fetchPriority="high"
          />
          <p className="text-[0.5rem] sm:text-[0.8rem] md:text-[1rem] font-semibold ">
            BEDROOM IN SLATE BLUE
          </p>
        </div>
        <div className="mt-4 mb-6 overflow-hidden">
          <img
            className="size-40 sm:size-80 md:size-90 lg:size-110 border-0 rounded-md my-2 sm:my-6 lg:my-8 transition-transform object-cover duration-500 hover:scale-[1.03]"
            src="\kitchen.jpg"
            alt="A bright, well-kept kitchen with cabinets, counter tops, and cooking appliances, presenting a clean and welcoming atmosphere."
            fetchPriority="high"
          />
          <p className="text-[0.5rem] sm:text-[0.8rem] md:text-[1rem] font-semibold">
            KITCHEN IN SAGE GREEN
          </p>
        </div>
        <div className="mt-4 mb-6 overflow-hidden">
          <img
            className="size-40 sm:size-80 md:size-90 lg:size-110 border-0 rounded-md my-2 sm:my-6 lg:my-8 transition-transform object-cover duration-500 hover:scale-[1.03]"
            src="\dinning.jpg"
            alt="A dining area inside the home, arranged for meals and gatherings."
            fetchPriority="high"
          />
          <p className="text-[0.5rem] sm:text-[0.8rem] md:text-[1rem] font-semibold">
            DINNING ROOM IN BURGUNDY
          </p>
        </div>
        <div className="mt-4 mb-6 overflow-hidden">
          <img
            className="size-40 sm:size-80 md:size-90 lg:size-110 border-0 rounded-md my-2 sm:my-6 lg:my-8 transition-transform object-cover duration-500 hover:scale-[1.03]"
            src="\exterior.jpg"
            alt="The exterior of a home, shown in its surrounding outdoor environment."
            fetchPriority="high"
          />
          <p className="text-[0.5rem] sm:text-[0.8rem] md:text-[1rem] font-semibold">
            EXTERIOR IN SAGE GRAY
          </p>
        </div>
        <div className="mt-4 mb-6 overflow-hidden">
          <img
            className="size-40 sm:size-80 md:size-90 lg:size-110 border-0 rounded-md my-2 sm:my-6 lg:my-8 transition-transform object-cover duration-500 hover:scale-[1.03]"
            src="\study-room.webp"
            alt="A study room in the home, arranged as a space for reading, studying, or working."
            fetchPriority="high"
          />
          <p className="text-[0.5rem] sm:text-[0.8rem] md:text-[1rem] font-semibold">
            STUDY IN WARM BEIGE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
