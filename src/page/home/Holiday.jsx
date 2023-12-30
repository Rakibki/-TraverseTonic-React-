import Title from "../../components/title/Title";
import holiday1 from "../../assets/image/holiday1.png";
import holiday2 from "../../assets/image/holiday2.png";
import holiday3 from "../../assets/image/holiday3.png";
import holiday4 from "../../assets/image/holiday4.png";

const Holiday = () => {
  return (
    <div>
      <Title
        title={"Winter Holiday"}
        subTitle={"Enjoy Your"}
        desc={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor lorem ipsum."
        }
      />

      <div className="grid px-20 -mt-3 grid-cols-4">
        <div className="p-10">
          <img className="mx-auto" src={holiday1} alt="" />
          <h1 className="text-center text-xl mb-3 mt-2 font-bold">
            Restaurants
          </h1>
          <h1 className="text-center text-[#727272] text-lg">
            Aenean commodo ligula eget dolor. Lorem ipsum
          </h1>
        </div>

        <div className="p-10">
          <img className="mx-auto" src={holiday2} alt="" />
          <h1 className="text-center text-xl mb-3 mt-2 font-bold">
            Sightseeing
          </h1>
          <h1 className="text-center text-[#727272] text-lg">
            Aenean commodo ligula eget dolor. Lorem ipsum
          </h1>
        </div>

        <div className="p-10">
          <img className="mx-auto" src={holiday3} alt="" />
          <h1 className="text-center text-xl mb-3 mt-2 font-bold">
            Shops & Boutiques
          </h1>
          <h1 className="text-center text-[#727272] text-lg">
            Aenean commodo ligula eget dolor. Lorem ipsum
          </h1>
        </div>

        <div className="p-10">
          <img className="mx-auto" src={holiday4} alt="" />
          <h1 className="text-center text-xl mb-3 mt-2 font-bold">
            Where to Stay
          </h1>
          <h1 className="text-center text-[#727272] text-lg">
            Aenean commodo ligula eget dolor. Lorem ipsum
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Holiday;
