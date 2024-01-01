import { FaUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div>
      <div>map</div>
      
      <div className="w-[80%] mx-auto">
        <form className="mt-6 mx-auto p-16 bg-[#3fd0d4]">
          <h1 className="text-2xl text-white mb-2 font-bold font-Poppins">
            Leave a Reply
          </h1>
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

          <div className="relative mt-2 overflow-hidden">
            <textarea
              type="text"
              className="bg-[#6fdcdf] h-[120px] placeholder:text-white py-2 pl-10 w-full text-lg outline-none"
              placeholder="Message"
            />
            <FiMessageCircle className="absolute text-xl left-3 text-white top-[10%]" />
          </div>

          <div className="mt-3 mb-4">
            <button className="py-3 uppercase hover:bg-[#6fdcdf] hover:text-white transition-all bg-white text-black font-Poppins font-semibold w-full">
              SEND
            </button>
          </div>
        </form>

        <div className="my-20 gap-3 grid grid-cols-3">
          <div className="p-4">
            <h1 className="text-2xl text-black mb-2 font-bold font-Poppins">
              Paris
            </h1>
            <p className="font-Poppins mt-4">
              Agam fabulas. Ut audiam invenire iracun. Tn eam dimo diam ea.
              Piqor sit.
            </p>

            <div className="mt-8">
              <div className="flex items-center gap-2 font-Poppins">
                <MdOutlineMail className="text-xl text-[#3fd0d4]" />{" "}
                <p className="cursor-pointer hover:text-[#3fd0d4]">
                  setsail@qodeinteractive.com
                </p>
              </div>
              <div className="flex items-center mt-2 gap-2 font-Poppins">
                <FaPhoneAlt className="text-xl text-[#3fd0d4]" />{" "}
                <p className="cursor-pointer hover:text-[#3fd0d4]">
                  5544332211
                </p>
              </div>
              <div className="flex items-center mt-2 gap-2 font-Poppins">
                <IoLocationSharp className="text-xl text-[#3fd0d4]" />{" "}
                <p className="cursor-pointer hover:text-[#3fd0d4]">
                  Place des Pyramides 7 Paris
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h1 className="text-2xl text-black mb-2 font-bold font-Poppins">
              London
            </h1>
            <p className="font-Poppins mt-4">
              Agam fabulas. Ut audiam invenire iracun. Tn eam dimo diam ea.
              Piqor sit.
            </p>

            <div className="mt-8">
              <div className="flex items-center gap-2 font-Poppins">
                <MdOutlineMail className="text-xl text-[#3fd0d4]" />{" "}
                <p className="cursor-pointer hover:text-[#3fd0d4]">
                  setsail@example.com
                </p>
              </div>
              <div className="flex items-center mt-2 gap-2 font-Poppins">
                <FaPhoneAlt className="text-xl text-[#3fd0d4]" />{" "}
                <p className="cursor-pointer hover:text-[#3fd0d4]">
                  0011223344
                </p>
              </div>
              <div className="flex items-center mt-2 gap-2 font-Poppins">
                <IoLocationSharp className="text-xl text-[#3fd0d4]" />{" "}
                <p className="cursor-pointer hover:text-[#3fd0d4]">
                  11 Strand London WC2N 5RJ
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h1 className="text-2xl text-black mb-2 font-bold font-Poppins">
              New York
            </h1>
            <p className="font-Poppins mt-4">
              Agam fabulas. Ut audiam invenire iracun. Tn eam dimo diam ea.
              Piqor sit.
            </p>

            <div className="mt-8">
              <div className="flex items-center gap-2 font-Poppins">
                <MdOutlineMail className="text-xl text-[#3fd0d4]" />{" "}
                <p className="cursor-pointer hover:text-[#3fd0d4]">
                  setsail@qodeinteractive.com
                </p>
              </div>
              <div className="flex items-center mt-2 gap-2 font-Poppins">
                <FaPhoneAlt className="text-xl text-[#3fd0d4]" />{" "}
                <p className="cursor-pointer hover:text-[#3fd0d4]">
                  1122334455
                </p>
              </div>
              <div className="flex items-center mt-2 gap-2 font-Poppins">
                <IoLocationSharp className="text-xl text-[#3fd0d4]" />{" "}
                <p className="cursor-pointer hover:text-[#3fd0d4]">
                  Broadway New York, NY 10031
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
