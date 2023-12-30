import newPaper from "../../assets/image/newPaper.png";

const Newspapaer = () => {
  return (
    <div className="grid items-center gap-3 my-16 grid-cols-2">
      <div>
        <img src={newPaper} alt="" />
      </div>
      <div>
        <p className="text-[#505050] font-Poppins mb-2">Lorem ipsum dolor</p>
        <h2 className="text-4xl font-bold font-Poppins">
          FINDING THE PERFECT TRAILS TO HIKE IS EASY WITH{" "}
          <span className="text-[#3fd0d4]">NEWSLETTER</span>
        </h2>
        <p className="text-[#505050] mb-6 mt-3 font-Poppins">
          Lorem ipsum dolor FINDING THE PERFECT TRAILS TO HIKE IS EASY WITH
          NEWSLETTER Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiu tempor incididu nt ut labore et dolore minim veniam, quis
          nostrud nus
        </p>

        <div className="grid gap-4 grid-cols-3">
          <input
            className="font-Satisfy px-2 outline-none w-full border-[1px] border-[#3fd0d4]"
            type="text"
            name="name"
            placeholder="Name"
            id=""
          />
          <input
            className="font-Satisfy px-2 outline-none w-full border-[1px] border-[#3fd0d4]"
            type="email"
            name="email"
            placeholder="E-mail"
            id=""
          />
          <button className="text-white font-semibold px-6 hover:bg-opacity-55 transition-all text-lg py-2 bg-[#3fd0d4]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newspapaer;
