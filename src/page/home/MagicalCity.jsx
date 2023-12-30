import newParallax from "../../assets/image/new-parallax-img-1.jpg";
import { Parallax } from "react-parallax";
import newVideoButton from "../../assets/image/newVideoButton.jpg";
import playbutton from "../../assets/image/play-button.png"

const MagicalCity = () => {
  return (
    <Parallax
      //   blur={2}
      bgImage={newParallax}
      className="flex my-10 overflow-visible items-center justify-center"
      bgImageAlt="the cat"
      strength={200}
    >
      <div className="my-16">
        <div className="text-white">
          <h1 className="text-center text-2xl">Celebrate In</h1>
          <h2 className="text-6xl font-bold text-center">The Magical City</h2>
          <h2 className="text-lg text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />{" "}
            Aenean commodo ligula eget dolor. Aenean massa. Cum
          </h2>
        </div>
        <div className="relative">
          <img className="" src={newVideoButton} alt="" />
          <div className="absolute top-[50%] left-[50%]"><img src={playbutton} alt="" /></div>
        </div>
      </div>
    </Parallax>
  );
};

export default MagicalCity;
