const Contact = () => {
  return (
    <div className="h-screen mt-8 sm:mt-12 lg:mt-16">
      <div className="flex justify-center flex-col w-full items-center">
        <p className="font-bold text-lg sm:text-xl lg:text-2xl text-[#804B56] mb-4">
          Let's Discus Your Project
        </p> 
        <p className="text-slate-700 text-md sm:text-lg md:text-xl">Have a project in mind? Fill out the form below.</p>
      </div>
      <div className="flex justify-center mt-8 md:mt-10">
        <form>
          <div className="flex flex-col items-center justify-start h-[62vh] sm:h-[50vh] lg:h-[64vh] text-lg pt-8 gap-6 px-12 text-mist-500 border-[#7d414d] border rounded-md ">
            <input
              type="text"
              placeholder="Full Name"
              className=" border-[#7d414d] border  placeholder:text-mist-400 h-16 w-60 sm:w-105 pl-4 sm:pl-8 "></input>
            <input
              type="text"
              placeholder="Phone"
              className=" border-[#7d414d] border  placeholder:text-mist-400 h-16 w-60 sm:w-105 pl-4 sm:pl-8 "></input>
            <input
              type="email"
              placeholder="Email"
              className=" border-[#7d414d] border  placeholder:text-mist-400 h-16 w-60 sm:w-105 pl-4 sm:pl-8 "></input>
            <textarea
              placeholder="Share Your Thoughts..."
              className=" border-[#7d414d] border  placeholder:text-mist-400 h-32 w-60 sm:w-105 pl-4 sm:pl-8 pt-4 "></textarea>
            <button
              type="submit"
              className="bg-[#804B56] text-[linen] px-4 py-2 hover:scale-109  ease-in-out  text-semibold font-medium border rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
