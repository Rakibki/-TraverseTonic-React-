import Title from "../../components/title/Title";
import tips1 from "../../assets/image/tips1.jpg";
import tips2 from "../../assets/image/tips2.jpg";
import { GoArrowUpRight } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

const TravelEssentlals = () => {
  return (
    <div className="mt-20">
      <Title title={"TRAVEL ESSENTIALS TIPS"} subTitle={"Lorem ipsum dolor"} />
      <div>
        <div className="grid gap-6 grid-cols-2">
          <div>
            <img src={tips1} alt="" />
          </div>
          <div className="p-10">
            <div className="flex mb-3 gap-3 items-center">
              <h2 className="flex items-center font-Satisfy text-[#505050] font-medium text-lg gap-2">
                <CiCalendar className="text-xl" />
                October 8, 2019
              </h2>
              <h2 className="flex items-center font-Satisfy text-[#505050] font-medium text-lg gap-2">
                <CiEdit className="text-xl" />
                by Alisa Michaels
              </h2>
            </div>
            <h2 className="text-3xl mb-3 font-bold">
              MOVING TROUGH: THE EVERYDAY URBAN JUNGLE OF YOUR CITY
            </h2>
            <p className="mb-4 font-Poppins text-[#505050]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut
              enim. ad minim veniam...
            </p>
            <button className="flex gap-2 items-center font-semibold">
              READ MORE <GoArrowUpRight className="text-xl" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-2">
          <div className="p-10">
            <div className="flex mb-3 gap-3 items-center">
              <h2 className="flex items-center font-Satisfy text-[#505050] font-medium text-lg gap-2">
                <CiCalendar className="text-xl" />
                October 8, 2019
              </h2>
              <h2 className="flex items-center font-Satisfy text-[#505050] font-medium text-lg gap-2">
                <CiEdit className="text-xl" />
                by Alisa Michaels
              </h2>
            </div>
            <h2 className="text-3xl mb-3 font-bold">
              MOVING TROUGH: THE EVERYDAY URBAN JUNGLE OF YOUR CITY
            </h2>
            <p className="mb-4 font-Poppins text-[#505050]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut
              enim. ad minim veniam...
            </p>
            <button className="flex gap-2 items-center font-semibold">
              READ MORE <GoArrowUpRight className="text-xl" />
            </button>
          </div>
          <div>
            <img src={tips2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelEssentlals;
