import { useContext, useState } from "react";
import logo from "../../assets/image/logo.png";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../providers/AuthProvaider";
import logo2 from "../../assets/image/logo-vertical.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { getLocalStor } from "../../utils/localStoreg";
import ShoppingCard from "../shoppingCard/ShoppingCard";

const Navber = () => {
  const { user, logOut } = useContext(authContext);
  const lsCard = getLocalStor("card");
  const [cardOpen, setCardOpen] = useState(false);

  const handleLogout = () => {
    logOut();
  };

  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#3fd0d4]" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#3fd0d4]" : ""
          }
          to={"/aboutUs"}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#3fd0d4]" : ""
          }
          to={"/shop"}
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#3fd0d4]" : ""
          }
          to={"/tours"}
        >
          Tours
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#3fd0d4]" : ""
          }
          to={"/blog"}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#3fd0d4]" : ""
          }
          to={"/contactUs"}
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer py-2 z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-white">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link to={"/"}>
              <img className="w-[170px]" src={logo} alt="" />
            </Link>

            <div className="flex-none mx-auto hidden lg:block">
              <ul className="flex gap-6 font-medium text-base menu-horizontal">
                {/* Navbar menu content here */}
                {navItems}
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {/* possing Card */}
            <div className="relative flex items-center">
              <div className="relative">
                <MdOutlineShoppingCart
                  onClick={() => setCardOpen(!cardOpen)}
                  className="text-3xl cursor-pointer"
                />
                <div className="absolute bg-[#3fd0d4] transition-all rounded-full px-1 text-white font-Poppins -right-1 -top-3">
                  {lsCard.length}
                </div>
              </div>
              <div
                className={`absolute bottom-60 w-[300px] ${
                  cardOpen && "top-[55px]"
                } h-[380px] -right-20 py-2 px-4 bg-white`}
              >
                <ShoppingCard setCardOpen={setCardOpen} />
              </div>
            </div>

            {user && user?.email ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  className="w-[45px] overflow-hidden h-[45px] m-1"
                >
                  <img
                    className="rounded-full w-full h-full border-[2px] border-[#3fd0d4]"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu pt-10 pb-6 px-6 shadow bg-base-100 w-52"
                >
                  <Link className="w-full" to={'/dashboard/profile'}>
                    <button className="mb-1 w-full font-semibold px-6 hover:bg-opacity-55 transition-all text-[#3fd0d4] text-lg border-2 py-2 border-[#3fd0d4]">
                      Profile
                    </button>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="text-white font-semibold px-6 hover:bg-opacity-55 transition-all text-lg py-2 bg-[#3fd0d4]"
                  >
                    Logout
                  </button>
                </ul>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="text-white font-semibold px-6 hover:bg-opacity-55 transition-all text-lg py-2 bg-[#3fd0d4]">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="p-10 text-lg font-medium w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <img src={logo2} alt="" />
          <div className="mt-4 flex  flex-col gap-2">{navItems}</div>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
