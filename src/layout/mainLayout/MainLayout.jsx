import Footer from "../../components/footer/Footer";
import Navber from "../../components/navber/Navber";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
