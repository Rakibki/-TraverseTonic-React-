import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleProduct from "../../components/singleProduct/SingleProduct";
import Title from "../../components/title/Title";
import { useState } from "react";

const Products = () => {
  const [tabIndex, setTabIndex] = useState(0);

  console.log(tabIndex);

  const { isPending, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("products.json").then((res) => res.json()),
  });

  if (isPending) <Loader />;

  const winter = data?.filter((item) => item?.Category === "Winter");
  const beach = data?.filter((item) => item?.Category === "Beach");
  const camping = data?.filter((item) => item?.Category === "Camping");
  const vintage = data?.filter((item) => item?.Category === "Vintage");
  const summer = data?.filter((item) => item?.Category === "Summer");


  console.log(tabIndex);

  return (
    <div className="w-[85%] mb-20 mx-auto">
      <Title subTitle={"The Best"} title={"Out Product"} />
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
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
                Winter
              </p>
            </Tab>

            <Tab style={{ border: 0 }}>
              <p
                className={`${
                  tabIndex === 1 && "bg-[#3fd0d4] text-white"
                } border-[1px] border-[#3fd0d4] rounded-md px-6 py-2`}
              >
                Beach
              </p>
            </Tab>

            <Tab style={{ border: 0 }}>
              <p
                className={`${
                  tabIndex === 2 && "bg-[#3fd0d4] text-white"
                } border-[1px] border-[#3fd0d4] rounded-md px-6 py-2`}
              >
                Camping
              </p>
            </Tab>

            <Tab style={{ border: 0 }}>
              <p
                className={`${
                  tabIndex === 3 && "bg-[#3fd0d4] text-white"
                } border-[1px] border-[#3fd0d4] rounded-md px-6 py-2`}
              >
                Vintage
              </p>
            </Tab>

            <Tab style={{ border: 0 }}>
              <p
                className={`${
                  tabIndex === 4 && "bg-[#3fd0d4] text-white"
                } border-[1px] border-[#3fd0d4] rounded-md px-6 py-2`}
              >
                Summer
              </p>
            </Tab>
          </TabList>
        </div>

        <TabPanel className="flex justify-center">
          <div className="grid grid-cols-4 gap-4">
            {winter?.map((item) => (
              <SingleProduct key={SingleProduct?._id} product={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-4 gap-4">
            {beach?.map((item) => (
              <SingleProduct key={SingleProduct?._id} product={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-4 gap-4">
            {camping?.map((item) => (
              <SingleProduct key={SingleProduct?._id} product={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-4 gap-4">
            {vintage?.map((item) => (
              <SingleProduct key={SingleProduct?._id} product={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-4 gap-4">
            {summer?.map((item) => (
              <SingleProduct key={SingleProduct?._id} product={item} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Products;
