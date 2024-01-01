import { Link } from "react-router-dom";
import errorImage from "../../assets/image/error.jpg";
import errorText from "../../assets/image/errorText.png";

const Error = () => {
  return (
    <div className="w-full relative h-screen">
      <img className="w-full absolute top-0 h-full" src={errorImage} alt="" />
      <div className="absolute z-20 w-full h-full top-2">
        <div className="flex justify-center">
          <img className="w-[400px] h-[400px]" src={errorText} alt="" />
        </div>
        <div className="flex justify-center mt-6">
          <Link to={"/"}>
            <button className="py-3 hover:opacity-80 transition-all uppercase bg-[#3fd0d4] px-6 text-white transition-al font-Poppins font-semibold">
              back to back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
