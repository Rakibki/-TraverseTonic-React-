import coverImg from "../../assets/image/cover.jpg";
import { Parallax } from "react-parallax";

const Cover = ({ title, image }) => {
  return (
    <Parallax
      //   blur={2}
      bgImage={image?image:coverImg}
      className="h-[400px] flex items-center justify-center"
      bgImageAlt="the cat"
      strength={200}
    >
      <div>
        <h1 className="text-4xl text-center font-Satisfy font-semibold text-white">Amazing Tour</h1>
        <h1 className="text-6xl font-bold text-white">{title}</h1>
      </div>
    </Parallax>
  );
};

export default Cover;
