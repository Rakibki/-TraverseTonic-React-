import Title from "../../components/title/Title";
import ourTeam1 from "../../assets/image/our-team-img-1.jpg";
import ourTeam2 from "../../assets/image/our-team-img-2.jpg";
import ourTeam3 from "../../assets/image/our-team-img-3.jpg";
import ourTeam4 from "../../assets/image/our-team-img-4.jpg";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io5";
import "./style.css";

const OutTeam = () => {
  return (
    <div className="px-20 my-20 overflow-x-hidden">
      <Title
        subTitle={"The Best"}
        desc={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis"
        }
        title={"Travel Experts"}
      />
      <div className="grid gap-2 overflow-hidden grid-cols-4">
        <div className="overflow-hidden teamContainer hover:relative h-[350px]">
          <img src={ourTeam1} alt="" />
          <div className="bg-[#3fd0d4] teamContent hidden absolute bottom-0 w-full py-6 px-8 text-white">
            <h2 className="text-xl font-semibold mb-2 text-center">
              Teresa James
            </h2>
            <p className="text-center">
              Sed ut perspiciatis unde <br /> omnis iste natus error sit
            </p>
            <div className="flex justify-center">
              <div className="mt-3 flex gap-2 text-xl">
                <FaFacebookF />
                <IoLogoInstagram />
                <CiLinkedin />
                <IoLogoTwitter />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden teamContainer hover:relative h-[350px]">
          <img src={ourTeam2} alt="" />
          <div className="bg-[#3fd0d4] teamContent hidden absolute bottom-0 w-full py-6 px-8 text-white">
            <h2 className="text-xl font-semibold mb-2 text-center">
              Jane Willis
            </h2>
            <p className="text-center">
              Sed ut perspiciatis unde <br /> omnis iste natus error sit
            </p>
            <div className="flex justify-center">
              <div className="mt-3 flex gap-2 text-xl">
                <FaFacebookF />
                <IoLogoInstagram />
                <CiLinkedin />
                <IoLogoTwitter />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden teamContainer  hover:relative h-[350px]">
          <img src={ourTeam3} alt="" />
          <div className="bg-[#3fd0d4] teamContent hidden absolute bottom-0 w-full py-6 px-8 text-white">
            <h2 className="text-xl font-semibold mb-2 text-center">
              Ralph Fields
            </h2>
            <p className="text-center">
              Sed ut perspiciatis unde <br /> omnis iste natus error sit
            </p>
            <div className="flex justify-center">
              <div className="mt-3 flex gap-2 text-xl">
                <FaFacebookF />
                <IoLogoInstagram />
                <CiLinkedin />
                <IoLogoTwitter />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden teamContainer hover:relative h-[350px]">
          <img src={ourTeam4} alt="" />
          <div className="bg-[#3fd0d4] teamContent hidden absolute bottom-0 w-full py-6 px-8 text-white">
            <h2 className="text-xl font-semibold mb-2 text-center">
              Lori Harvey
            </h2>
            <p className="text-center">
              Sed ut perspiciatis unde <br /> omnis iste natus error sit
            </p>
            <div className="flex justify-center">
              <div className="mt-3 flex gap-2 text-xl">
                <FaFacebookF />
                <IoLogoInstagram />
                <CiLinkedin />
                <IoLogoTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutTeam;
