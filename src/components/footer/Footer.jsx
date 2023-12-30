import logo from "../../assets/image/logo-footer.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#212121]">
      <footer className="footer p-10 py-20 text-white">
        <div>
          <img src={logo} alt="" />
          <p className="text-lg font-Poppins text-[#909090] mt-2">
            Lorem ipsum dolor sit ametco <br /> nsec te tuer adipiscing elitae
          </p>
          <div className="mt-4">
            <div className="flex hover:text-[#3fd0d4] cursor-pointer gap-2 text-base items-center">
              <MdOutlineMailOutline className="text-base" />
              <h1>setsail@example.com</h1>
            </div>
            <div className="flex hover:text-[#3fd0d4] cursor-pointer gap-2 text-base items-center">
              <FaPhone className="text-base" />
              <h1>1 562 867 5309</h1>
            </div>
            <div className="flex hover:text-[#3fd0d4] cursor-pointer gap-2 text-base items-center">
              <IoLocationSharp className="text-base" />
              <h1>Broadway & Morris St, New York</h1>
            </div>
          </div>
        </div>

        <nav>
          <header className="font-bold text-lg font-Poppins text-white">
            Our Recent Posts
          </header>
          <div className="mt-6">
            <p className="text-[#a9a9a9] text-lg">
              Visit Thailand, Bali And China
            </p>
            <p className="text-[#fff] font-Poppins mt-1">September 7, 2016</p>
          </div>
          <div className="mt-4">
            <p className="text-[#a9a9a9] text-lg">The Sound Of Our Jungle</p>
            <p className="text-[#fff] font-Poppins mt-1">September 7, 2016</p>
          </div>
          <div className="mt-4">
            <p className="text-[#a9a9a9] text-lg">New Year, New Resolutions!</p>
            <p className="text-[#fff] font-Poppins mt-1">September 7, 2016</p>
          </div>
        </nav>

        <nav>
          <header className="font-bold text-lg mb-6 font-Poppins text-white">
            Subscribe to our Newsletter
          </header>
          <p className="text-[#a9a9a9] text-lg">
            Etiam rhoncus. Maecenas temp us, <br /> tellus eget condimentum rho
          </p>
          <div className="mt-3">
            <div className="relative">
              <input
                type="text"
                className="bg-[#595959] py-3 pl-10 pr-6 text-lg outline-none"
                placeholder="Name"
              />
              <FaUser className="absolute text-xl left-3 text-white top-[30%]" />
            </div>
            <div className="relative mt-2">
              <input
                type="text"
                className="bg-[#595959] py-3 pl-10 pr-6 text-lg outline-none"
                placeholder="Email"
              />
              <MdOutlineMail className="absolute text-xl left-3 text-white top-[30%]" />
            </div>
            <div className="mt-2">
              <button className="text-white w-full font-semibold uppercase hover:bg-slate-200 hover:text-[#212121] px-6 transition-all text-lg py-3 bg-[#3fd0d4]">
                Subscribe
              </button>
            </div>
          </div>
        </nav>

        <nav>
          <header className="font-bold text-lg mb-6 font-Poppins text-white">
            Our Instagram
          </header>
          <p className="text-[#a9a9a9] text-lg">
            Aliquam lorem ante, dapibus inviver <br /> raqui feugiat a, tellus.
            Phasellus null
          </p>
        </nav>
      </footer>
      <div className="pb-6">
        <p className="text-center text-[#a9a9a9]">© 2018 <span className="text-white">Qode Interactive</span></p>
      </div>
    </div>
  );
};

export default Footer;
