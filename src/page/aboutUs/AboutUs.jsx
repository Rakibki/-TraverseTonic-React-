import aboutImg from "../../assets/image/about.jpg";
import aboutMen from "../../assets/image/about-us-img-1.png";
import Cover from "../../components/cover/Cover";
import aboutVidero from "../../assets/image/aboutVidero.jpg";
import playbutton from "../../assets/image/play-button.png";
import aboutUsImg from "../../assets/image/about-us-img-2.png";
import ProgressBar from "@ramonak/react-progress-bar";
import ReviewSlider from "./ReviewSlider";

const AboutUs = () => {


  return (
    <div>
      <Cover image={aboutImg} title={"About Us"} />

      <div className="gap-5 w-[90%] mx-auto mt-10 grid grid-cols-3 py-10">
        <div className="col-span-2">
          <h1 className="text-4xl font-bold">Our Popular Tours</h1>
          <p className="font-Poppins text-lg mt-4">
            Si elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam
            invenire <br /> iracundia vim. Tn eam dimo diam ea. Piber Korem sit
            amet.
          </p>
          <p className="font-Poppins mt-4">
            Al elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam
            invenire iracundia vim. En eam dico similique, ut sint posse sit,
            eum sumo diam ea. Liber consectetuer in mei, sea in imperdiet assue
            verit contentio nes, an his cibo blandit tacimates. Iusto iudi cabit
            sim ilique id velex, in sea rebum deseruisse appellantur. Etiam
            rhoncus. Maec enas tempus, tellus eget condimentum rhoncus.Aliquam
            lorem ante, dapibus in, viverra quis, feugiat
          </p>

          <button className="py-3 mt-4 hover:opacity-80 transition-all uppercase bg-[#3fd0d4] px-6 text-white transition-al font-Poppins font-semibold">
            READ MORE
          </button>
        </div>
        <div>
          <img src={aboutMen} alt="" />
        </div>
      </div>

      <div className="relative overflow-hidden mb-6 h-[400px]">
        <img src={aboutVidero} alt="" />
        <div className="absolute cursor-pointer top-[50%] left-[50%]">
          <img src={playbutton} alt="" />
        </div>
      </div>

      <div className="grid items-center w-[90%] mx-auto grid-cols-2">
        <div>
          <img src={aboutUsImg} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Our Popular Tours</h1>
          <p className="font-Poppins mt-6 text-lg">
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem
          </p>

          <div className="mt-10">
            <div>
              <p className="font-Poppins font-medium">Countryside</p>
              <ProgressBar
                borderRadius="0"
                baseBgColor="#f0ede8"
                bgColor="#3fd0d4"
                completed={76}
              />
            </div>

            <div className="mt-6">
              <p className="font-Poppins font-medium">Vineyard92</p>
              <ProgressBar
                borderRadius="0"
                baseBgColor="#f0ede8"
                bgColor="#3fd0d4"
                completed={92}
              />
            </div>

            <div className="mt-6">
              <p className="font-medium font-Poppins">Wine Tasting</p>
              <ProgressBar
                borderRadius="0"
                baseBgColor="#f0ede8"
                bgColor="#3fd0d4"
                completed={84}
              />
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-[90%] mx-auto mb-20 mt-16">
          <ReviewSlider />
        </div>
    </div>
  );
};

export default AboutUs;
