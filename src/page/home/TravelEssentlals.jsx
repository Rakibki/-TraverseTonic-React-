import Title from "../../components/title/Title";
import tips1 from "../../assets/image/tips1.jpg";
import tips2 from "../../assets/image/tips2.jpg";
import { GoArrowUpRight } from "react-icons/go";

const TravelEssentlals = () => {
  return (
    <div>
      <Title
        desc={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor lorem ipsum."
        }
        title={"TRAVEL ESSENTIALS TIPS"}
        subTitle={"Lorem ipsum dolor"}
      />

      <div>
        <div className="grid grid-cols-2">
          <div>
            <img src={tips1} alt="" />
          </div>
          <div>
            <h2>October 8, 2019</h2>
            <h2>by Alisa Michaels</h2>
            <h2 className="text-4xl font-bold">
              MOVING TROUGH: THE EVERYDAY URBAN JUNGLE OF YOUR CITY
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut
              enim. ad minim veniam...
            </p>
            <button className="flex gap-2 items-center font-semibold">
              READ MORE <GoArrowUpRight className="text-xl" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div>
            <h2>October 8, 2019</h2>
            <h2>by Alisa Michaels</h2>
            <h2 className="text-4xl font-bold">
              MOVING TROUGH: THE EVERYDAY URBAN JUNGLE OF YOUR CITY
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut
              enim. ad minim veniam...
            </p>
            <button className="flex gap-2 items-center font-semibold">
              READ MORE <GoArrowUpRight className="text-xl" />
            </button>
          </div>
          <div>
            <img src={tips2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelEssentlals;
