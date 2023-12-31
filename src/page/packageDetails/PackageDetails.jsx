import { useParams } from "react-router-dom";
import Cover from "../../components/cover/Cover";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";
import { Rate } from "antd";
import { FaRegCalendar } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LiaChevronCircleRightSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import sidebarImg from "../../assets/image/sidebar-img-1.jpg"

const PackageDetails = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());

  const { isPending, data } = useQuery({
    queryKey: ["packafge"],
    queryFn: async () => {
      const res = await fetch("/package.json");
      const result = await res.json();
      const packahe = result.find((item) => item?._id == id);
      return packahe;
    },
  });

  if (isPending) <Loader />;

  return (
    <div>
      <Cover title={data?.title} />

      <div className="my-20 grid gap-6 grid-cols-4 px-24">
        <div className="col-span-3">
          <div className="flex gap-10 items-center">
            <h1 className="text-3xl font-bold">{data?.title}</h1>
            <div className="text-xl text-[#3fd0d4] font-bold">
              ${data?.price}{" "}
              <span className="font-normal text-[#505050]">/ per person</span>
            </div>
          </div>
          <div className="mt-3 flex gap-2 items-center">
            <Rate
              disabled
              className="text-sm text-[#3fd0d4]"
              defaultValue={data?.ratting}
            />
            <p className="font-Poppins text-sm text-[#505050]">(1 Review)</p>
          </div>
          <p className="text-[#505050] mt-6 font-Poppins">{data?.desc}</p>

          <div className="text-white mt-6">
            <div className="flex mx-auto items-center text-lg gap-1">
              <div className="flex gap-2 bg-[#3fd0d4] py-2 px-8 mr-3 items-center">
                <FaRegCalendar className="text-base" /> <h1>1</h1>
              </div>
              <div className="flex bg-[#3fd0d4] py-2 px-8 gap-2 mr-3 items-center">
                <FaRegUser className="text-base" /> <h1>11</h1>
              </div>
              <div className="flex bg-[#3fd0d4] py-2 px-8 gap-2 mr-3 items-center">
                <IoLocationOutline className="text-base" />
                <h1>Skling</h1>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex gap-10 mb-6 font-Poppins">
              <h2 className="font-semibold">Destination :</h2>{" "}
              <h1 className="text-[#505050]">{data?.Destination}</h1>
            </div>
            <div className="flex  gap-10 mb-6 font-Poppins">
              <h2 className="font-semibold">Departure :</h2>{" "}
              <h1 className="text-[#505050]">{data?.Departure}</h1>
            </div>
            <div className="flex  gap-10 mb-6 font-Poppins">
              <h2 className="font-semibold">Departure Time :</h2>{" "}
              <h1 className="text-[#505050]">{data?.DepartureTime}</h1>
            </div>
            <div className="flex  gap-10 mb-6 font-Poppins">
              <h2 className="font-semibold">Departure Time :</h2>{" "}
              <h1 className="text-[#505050]">{data?.DepartureTime}</h1>
            </div>
            <div className="flex  gap-10 mb-6 font-Poppins">
              <h2 className="font-semibold">Dress Code :</h2>{" "}
              <h1 className="text-[#505050]">{data?.DressCode}</h1>
            </div>

            <div className="flex  gap-10 mb-6 font-Poppins">
              <h2 className="font-semibold">Included :</h2>{" "}
              <h1 className="text-[#505050]">
                {data?.Included?.map((item) => {
                  return (
                    <div className="flex gap-2 items-center" key={item?._id}>
                      <LiaChevronCircleRightSolid /> {item}
                    </div>
                  );
                })}
              </h1>
            </div>

            <div className="flex mt-4 gap-10 mb-6 font-Poppins">
              <h2 className="font-semibold">Not Included :</h2>{" "}
              <h1 className="text-[#505050]">
                {data?.NotIncluded?.map((item) => {
                  return (
                    <div className="flex gap-2 items-center" key={item?._id}>
                      <IoCloseCircleOutline /> {item}
                    </div>
                  );
                })}
              </h1>
            </div>
          </div>
        </div>

        <div className="col-span-1 text-white p-6 bg-[#3fd0d4]">
          <h2 className="text-2xl mt-6 font-Poppins font-semibold text-center">
            Book This Tour
          </h2>
          <h2 className="text-base mt-4 font-Poppins font-semibold">
            Arrange your trip in advance - book this tour now!
          </h2>

          <form className="mt-6">
            <div className="relative overflow-hidden">
              <input
                type="text"
                className="bg-[#6fdcdf] placeholder:text-white py-2 pl-10 w-full text-lg outline-none"
                placeholder="Name"
              />
              <FaUser className="absolute text-xl left-3 text-white top-[30%]" />
            </div>

            <div className="relative mt-2 overflow-hidden">
              <input
                type="email"
                className="bg-[#6fdcdf] placeholder:text-white py-2 pl-10 w-full text-lg outline-none"
                placeholder="E-mail"
              />
              <MdOutlineMail className="absolute placeholder:text-white text-xl left-3 text-white top-[30%]" />
            </div>

            <div className="relative mt-2 text-white overflow-hidden">
              <input
                type="number"
                className="bg-[#6fdcdf] placeholder:text-white py-2 pl-10 w-full text-white text-lg outline-none"
                placeholder="Phone"
              />
              <FaPhone className="absolute text-xl left-3 text-white top-[30%]" />
            </div>

            <div className="relative mt-2 bg-[#6fdcdf] ">
              <DatePicker
                className="text-white pl-10 py-2 w-full text-lg outline-none bg-[#6fdcdf]"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <CiCalendarDate className="absolute text-xl left-3 text-white top-[30%]" />
            </div>

            <div className="relative mt-2 overflow-hidden">
              <textarea
                type="text"
                className="bg-[#6fdcdf] placeholder:text-white py-2 pl-10 w-full text-lg outline-none"
                placeholder="Message"
              />
              <FiMessageCircle className="absolute text-xl left-3 text-white top-[20%]" />
            </div>

            <div className="mt-3 mb-4">
              <button className="py-3 hover:bg-[#6fdcdf] hover:text-white transition-all bg-white text-black font-Poppins font-semibold w-full">BOOK NOW</button>
            </div>
          </form>
          <img src={sidebarImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
