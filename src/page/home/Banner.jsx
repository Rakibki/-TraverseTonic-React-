import AwesomeSlider from "react-awesome-slider";
import banner1 from "../../assets/image/banner1.jpg";
import banner2 from "../../assets/image/banner2.jpg";
import banner3 from "../../assets/image/banner3.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineWhereToVote } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { GiPin } from "react-icons/gi";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative mb-20">
      <AwesomeSlider className="h-[600px]">
        <div className="w-full relative h-full">
          <img src={banner1} className="w-full h-full" alt="" />
          <div className="flex justify-center">
            <div
              data-aos="fade-up"
              className="absolute top-36 p-10 bg-opacity-30 bg-black"
            >
              <h2 className="font-Satisfy text-center text-white text-6xl">
                Lets Go Mew
              </h2>
              <h2 className="text-white font-bold text-center text-8xl">
                Relax And Enjoy
              </h2>
              <h2 className="text-white mt-2 text-center text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
                Explicabo reiciendis fugit pariatur, illum ipsam <br />
                distinctio. Sequi sapiente quam inventore autem!
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full relative overflow-hidden h-full">
          <img src={banner2} className="w-full h-full" alt="" />
          <div className="flex justify-center">
            <div
              data-aos="fade-up"
              className="absolute top-36 p-10 bg-opacity-30 bg-black"
            >
              <h2 className="font-Satisfy text-center text-white text-6xl">
                Lets Go Mew
              </h2>
              <h2 className="text-white font-bold text-center text-8xl">
                Relax And Enjoy
              </h2>
              <h2 className="text-white mt-2 text-center text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
                Explicabo reiciendis fugit pariatur, illum ipsam <br />
                distinctio. Sequi sapiente quam inventore autem!
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full relative overflow-hidden h-full">
          <img src={banner3} className="w-full h-full" alt="" />
          <div className="flex justify-center">
            <div
              data-aos="fade-up"
              className="absolute top-36 p-10 bg-opacity-30 bg-black"
            >
              <h2 className="font-Satisfy text-center text-white text-6xl">
                Lets Go Mew
              </h2>
              <h2 className="text-white font-bold text-center text-8xl">
                Relax And Enjoy
              </h2>
              <h2 className="text-white mt-2 text-center text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
                Explicabo reiciendis fugit pariatur, illum ipsam <br />
                distinctio. Sequi sapiente quam inventore autem!
              </h2>
            </div>
          </div>
        </div>
      </AwesomeSlider>

      <div className="absolute z-50 flex w-full justify-center -bottom-10">
        <div className="shadow-xl w-[80%] bg-white items-center p-4 grid grid-cols-4">
          <div className="relative text-[#848484]">
            <input
              type="text"
              name="where"
              className=" w-full py-3 pl-10 border-r-2 text-lg outline-none"
              placeholder="Where To ?"
            />
            <MdOutlineWhereToVote className="absolute text-xl left-3 top-[30%]" />
          </div>

          <div className="relative text-[#848484]">
            <input
              type="text"
              name="month"
              className="w-full py-3 pl-10 border-r-2 text-lg outline-none"
              placeholder="Month"
            />
            <CiCalendar className="absolute text-xl left-3 top-[30%]" />
          </div>

          <div className="relative text-[#848484]">
            <select
              name="type"
              className="w-full py-3 pl-10 border-r-2 text-lg outline-none"
            >
              <option selected disabled value="">Travel Type</option>
              <option value="wines">Wines</option>
              <option value="popular">Popular</option>
              <option value="skiing">Skiing</option>
              <option value="trendy">Trendy</option>
            </select>
            <GiPin className="absolute text-xl left-3  top-[30%]" />
          </div>
          <div className="overflow-hidden">
            <button className="bg-[#6fdcdf] font-Poppins font-medium text-white w-full py-3">
              FIND NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
