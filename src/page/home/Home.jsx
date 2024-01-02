import Banner from "./Banner";
import "react-awesome-slider/dist/styles.css";
import Package from "./Package";
import Reviews from "./Reviews";
import MagicalCity from "./MagicalCity";
import Blog from "./Blog";
import Holiday from "./Holiday";
import TravelEssentlals from "./TravelEssentlals";
import Newspapaer from "./Newspapaer";
import OutTeam from "./OutTeam";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Package />
      <Products />
      <MagicalCity />
      <TravelEssentlals />
      <Newspapaer />
      <Blog />
      <OutTeam />
      <Holiday />
      <Reviews />
    </div>
  );
};

export default Home;
