import AwesomeSlider from "react-awesome-slider";
import banner1 from "../../assets/image/banner1.jpg";
import banner2 from "../../assets/image/banner2.jpg";
import banner3 from "../../assets/image/banner3.jpg";

const Banner = () => {
  return (
    <div>
      <AwesomeSlider>
        <div className="w-full overflow-hidden h-full">
          <img src={banner1} className="w-full h-full" alt="" />
        </div>

        <div className="w-full overflow-hidden h-full">
          <img src={banner2} className="w-full h-full" alt="" />
        </div>

        <div className="w-full overflow-hidden h-full">
          <img src={banner3} className="w-full h-full" alt="" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
