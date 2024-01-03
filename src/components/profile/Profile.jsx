import { useContext, useState } from "react";
import { authContext } from "../../providers/AuthProvaider";
import profileBg from "../../assets/image/profile.jpg";
import { FaFacebookF } from "react-icons/fa";
import { IoCloseOutline, IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io5";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useQuery } from "@tanstack/react-query";
import { getLocalStor } from "../../utils/localStoreg";
import Loader from "../loader/Loader";
import { Rate } from "antd";

const Profile = () => {
  const { user } = useContext(authContext);
  const [tabIndex, setTabIndex] = useState(0);
  const lsCard = getLocalStor("card");
  const lsTourList = getLocalStor("lsTourList");

  const { isPending, data } = useQuery({
    queryKey: ["productCard"],
    queryFn: () => fetch("products.json").then((res) => res.json()),
  });

  if (isPending) {
    return <Loader />;
  }
  const cardProducts = data?.filter((item) => lsCard.includes(item?._id));

  return (
    <div>
      <div className="w-full h-[300px] overflow-hidden">
        <img className="bg-cover" src={profileBg} alt="" />
      </div>
      <div className="grid mb-20 gap-4 grid-cols-3">
        <div className="p-10">
          <div className="w-[120px] -mt-20 mx-auto h-[120px]">
            <img
              className="w-full rounded-full h-full"
              src={user?.photoURL}
              alt=""
            />
          </div>

          <div className="mt-4">
            <h1 className="text-3xl text-center font-Poppins font-medium">
              {user?.displayName}
            </h1>
            <p className="mt-2 text-lg font-Poppins text-center">
              {user?.email}
            </p>
            <p className="mt-3 font-Poppins text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint est,
              sequi eveniet doloremque autem atque ducimus alias sunt tempore
              quam vitae in inventore pariatur, corrupti dolor voluptatum.
              Eligendi, omnis deserunt?
            </p>

            <div className="flex mt-4 justify-center">
              <div className="mt-3 flex text-[#3fd0d4] gap-4 text-3xl">
                <FaFacebookF />
                <IoLogoInstagram />
                <CiLinkedin />
                <IoLogoTwitter />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-6">
          <div>
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <div className="flex mb-10 justify-center">
                <TabList
                  className={
                    "border-none font-Poppins flex gap-2 bg-white rounded-xl p-6  drop-shadow-xl"
                  }
                >
                  <Tab style={{ border: 0 }}>
                    <p
                      className={`${
                        tabIndex === 0 && "bg-[#3fd0d4] text-white"
                      } border-[1px] border-[#3fd0d4] rounded-md px-6 py-2`}
                    >
                      My Card
                    </p>
                  </Tab>

                  <Tab style={{ border: 0 }}>
                    <p
                      className={`${
                        tabIndex === 1 && "bg-[#3fd0d4] text-white"
                      } border-[1px] border-[#3fd0d4] rounded-md px-6 py-2`}
                    >
                      My Tour
                    </p>
                  </Tab>
                </TabList>
              </div>

              <TabPanel className="flex justify-center">
                <div className="p-6 grid grid-cols-2 gap-3">
                  {cardProducts.map((item) => {
                    return (
                      <div
                        className="grid mb-2 gap-2 items-center  grid-cols-3"
                        key={item?._id}
                      >
                        <div>
                          <img src={item?.images[0]} alt="" />
                        </div>
                        <div className="col-span-2">
                          <div className="flex justify-between items-center">
                            <h1 className="font-medium font-Poppins">
                              {item?.name}
                            </h1>
                            <div>
                              <IoCloseOutline className="text-xl cursor-pointer" />
                            </div>
                          </div>{" "}
                          <Rate
                            disabled
                            className="text-sm text-[#3fd0d4]"
                            defaultValue={item?.ratting}
                          />
                          <p className="font-medium font-Poppins">
                            ${item?.price}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabPanel>

              <TabPanel>
                <div>
                  {lsTourList.map((item) => {
                    return (
                      <SwiperSlide className="shadow-xl" key={item?._id}>
                        <Link to={`/PackageDetails/${item?._id}`}>
                          <div>
                            <div className="overflow-hidden">
                              <img
                                className="hover:scale-125 transition-all"
                                src={item?.image}
                                alt=""
                              />
                            </div>
                            <div className="bg-[#3fd0d4] text-white flex">
                              <div className="flex mx-auto items-center text-lg gap-1">
                                <div className="flex gap-1 mr-3 items-center">
                                  <FaRegCalendar className="text-base" />{" "}
                                  <h1>1</h1>
                                </div>
                                <div className="flex gap-1 mr-3 items-center">
                                  <FaRegUser className="text-base" />{" "}
                                  <h1>11</h1>
                                </div>
                                <div className="flex gap-1 mr-3 items-center">
                                  <IoLocationOutline className="text-base" />
                                  <h1>Skling</h1>
                                </div>
                              </div>
                            </div>
                            <div className="p-6">
                              <div>
                                <h2 className="text-xl font-bold">
                                  {item?.title}
                                </h2>
                                <p className="text-[#505050] mt-2 font-Poppins">
                                  {item?.desc?.slice(0, 65)}...
                                </p>
                              </div>
                              <div className="flex mt-2 items-center gap-2">
                                <div className="font-bold">${item?.price}</div>
                                <div className="flex font-bold gap-1 items-center">
                                  <FaStar />
                                  {item?.ratting}Good
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
