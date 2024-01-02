import Cover from "../../components/cover/Cover";
import shopImage from "../../assets/image/aboutVidero.jpg";
import Loader from "../../components/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import SingleProduct from "../../components/singleProduct/SingleProduct";
import { IoIosSearch } from "react-icons/io";
import { Rate } from "antd";
import siderber from "../../assets/image/shop-sidebar-img-1.png"

const Shop = () => {
  const { isPending, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("products.json").then((res) => res.json()),
  });

  if (isPending) <Loader />;

  return (
    <div>
      <Cover image={shopImage} title={"Out Shop"} />

      <div className="w-[90%] mt-6 shadow-xl mx-auto">
        <div className="flex justify-center mt-7">
          <div className="flex gap-10">
            <div className="flex">
              <input
                type="text"
                className="bg-[#f8f8f8] outline-none text-lg text-[#848484] px-6 py-3"
                placeholder="Search Products"
              />
              <div className="py-3 px-5 bg-[#3fd0d4] text-white">
                <IoIosSearch className="text-2xl" />
              </div>
            </div>
            <div className="flex items-center">
              <h2>SORT BY:</h2>
              <select
                className="bg-[#f8f8f8] outline-none text-lg text-[#848484] px-6 py-3"
                id=""
              >
                <option value="lowTohight">low To hight</option>
                <option value="HighToLow">High To Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid p-8 gap-3 grid-cols-4 mb-10">
          <div className="col-span-3 grid grid-cols-3 gap-3 p-4">
            {data?.map((item) => (
              <SingleProduct product={item} key={item?._id} />
            ))}
          </div>

          <div className="p-4">
            <h1 className="text-lg mb-4 font-Poppins font-semibold">
              Categories
            </h1>
            <h1 className="text-lg mb-1 font-Poppins font-medium">
              Accessories
            </h1>
            <h1 className="text-lg mb-1 font-Poppins font-medium">Beach</h1>
            <h1 className="text-lg mb-1 font-Poppins font-medium">Camping</h1>
            <h1 className="text-lg mb-1 font-Poppins font-medium">Summer</h1>
            <h1 className="text-lg mb-1 font-Poppins font-medium">Vintage</h1>
            <h1 className="text-lg mb-1 font-Poppins font-medium">Winter</h1>

            <div className="mt-10">
              <h1 className="text-lg mb-4 font-Poppins font-semibold">
                Categories
              </h1>
              {data?.slice(0,4).map((item) => {
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
                      </div>{" "}
                      <Rate
                        disabled
                        className="text-sm text-[#3fd0d4]"
                        defaultValue={item?.ratting}
                      />
                      <p className="font-medium font-Poppins">${item?.price}</p>
                    </div>
                  </div>
                );
              })}
              
              <div className="mt-10">
                <img src={siderber} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
