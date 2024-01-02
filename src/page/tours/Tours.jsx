import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";
import Cover from "../../components/cover/Cover";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { FaRegCalendar, FaRegUser, FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoMdLocate } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import sidebarImg from "../../assets/image/sidebar-img-1.jpg"


const Tours = () => {
  const { isPending, data } = useQuery({
    queryKey: ["package"],
    queryFn: () => fetch("package.json").then((res) => res.json()),
  });

  if (isPending) <Loader />;

  return (
    <div>
      <Cover title={"Out Tours List "} />

      <div className="w-[85%] p-10 z-50 mx-auto grid grid-cols-4 gap-2 mt-10 bg-white shadow-2xl">
        <div className="col-span-3 grid grid-cols-2 gap-4">
          {data?.map((item) => {
            return (
              <SwiperSlide className="shadow-xl" key={item?._id}>
                <Link to={`/PackageDetails/${item?._id}`}>
                  <div>
                    <div className="overflow-hidden">
                      <img
                        className="hover:scale-125 transition-all"
                        src={item?.image}
                        alt=""
                      />
                    </div>
                    <div className="bg-[#3fd0d4] text-white flex">
                      <div className="flex mx-auto items-center text-lg gap-1">
                        <div className="flex gap-1 mr-3 items-center">
                          <FaRegCalendar className="text-base" /> <h1>1</h1>
                        </div>
                        <div className="flex gap-1 mr-3 items-center">
                          <FaRegUser className="text-base" /> <h1>11</h1>
                        </div>
                        <div className="flex gap-1 mr-3 items-center">
                          <IoLocationOutline className="text-base" />
                          <h1>Skling</h1>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div>
                        <h2 className="text-xl font-bold">{item?.title}</h2>
                        <p className="text-[#505050] mt-2 font-Poppins">
                          {item?.desc?.slice(0, 65)}...
                        </p>
                      </div>
                      <div className="flex mt-2 items-center gap-2">
                        <div className="font-bold">${item?.price}</div>
                        <div className="flex font-bold gap-1 items-center">
                          <FaStar />
                          {item?.ratting}Good
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </div>

        <div className="col-span-1 h-screen text-white p-6 bg-[#3fd0d4]">
          <h2 className="text-2xl mt-6 font-Poppins font-semibold text-center">
            Plan Your Trip
          </h2>
          <h2 className="text-base mt-4 font-Poppins font-semibold">
            It’s time to plan just the perfect vacation!
          </h2>

          <form className="mt-6">
            <div className="relative overflow-hidden">
              <input
                type="text"
                className="bg-[#6fdcdf] placeholder:text-white py-2 pl-10 w-full text-lg outline-none"
                placeholder="Tour Search"
              />
              <IoIosSearch className="absolute text-xl left-3 text-white top-[30%]" />
            </div>

            <div className="relative mt-2 overflow-hidden">
              <input
                type="text"
                className="bg-[#6fdcdf] placeholder:text-white py-2 pl-10 w-full text-lg outline-none"
                placeholder="Where To?"
              />
              <IoMdLocate className="absolute placeholder:text-white text-xl left-3 text-white top-[30%]" />
            </div>

            <div className="relative mt-2 text-white overflow-hidden">
              <input
                type="text"
                className="bg-[#6fdcdf] placeholder:text-white py-2 pl-10 w-full text-white text-lg outline-none"
                placeholder="Month"
              />
              <CiCalendar className="absolute text-xl left-3 text-white top-[30%]" />
            </div>

            <div className="mt-3 mb-4">
              <button className="py-3 hover:bg-[#6fdcdf] hover:text-white transition-all bg-white text-black font-Poppins font-semibold w-full">
                FIND NOW
              </button>
            </div>
          </form>
          <img src={sidebarImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tours;
