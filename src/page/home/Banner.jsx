import AwesomeSlider from "react-awesome-slider";
import banner1 from "../../assets/image/banner1.jpg";
import banner2 from "../../assets/image/banner2.jpg";
import banner3 from "../../assets/image/banner3.jpg";
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css'

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <AwesomeSlider className="h-[600px]">
        <div className="w-full relative overflow-hidden h-full">
          <img src={banner1} className="w-full h-full" alt="" />
          <div className="flex justify-center">
            <div data-aos="fade-up" className="absolute top-36 p-10 bg-opacity-30 bg-black">
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
            <div data-aos="fade-up" className="absolute top-36 p-10 bg-opacity-30 bg-black">
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
            <div data-aos="fade-up" className="absolute top-36 p-10 bg-opacity-30 bg-black">
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
    </div>
  );
};

export default Banner;
