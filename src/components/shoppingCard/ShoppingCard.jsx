import { useQuery } from "@tanstack/react-query";
import { getLocalStor } from "../../utils/localStoreg";
import Loader from "../loader/Loader";
import { Rate } from "antd";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Noticilation from "../../utils/Noticilation";

const ShoppingCard = ({ setCardOpen }) => {
  const lsCard = getLocalStor("card");

  const { isPending, data, refetch } = useQuery({
    queryKey: ["productCard"],
    queryFn: () => fetch("products.json").then((res) => res.json()),
  });

  if (isPending) {
    return <Loader />;
  }

  const cardProducts = data?.filter((item) => lsCard.includes(item?._id));

  const handleDelete = (id) => {
    const find = lsCard.findIndex((item) => item === id);
    lsCard.splice(find, 1);
    localStorage.setItem("card", JSON.stringify(lsCard));
    Noticilation("success", "product deleted succesfully");
    refetch();
  };

  const totalPrice = cardProducts?.reduce((acc, curr) => acc + curr?.price, 0);

  return (
    <div className="relative h-full">
      {cardProducts?.length < 1 && (
        <p className="text-center font-Poppins">No Products in the card</p>
      )}
      {cardProducts?.length > 0 && (
        <div>
          <div className="absolute right-0 bottom-0">
            <button onClick={() => setCardOpen(false)}>Close</button>
          </div>
          {cardProducts.slice(0, 3).map((item) => {
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
                    <h1 className="font-medium font-Poppins">{item?.name}</h1>
                    <div onClick={() => handleDelete(item?._id)}>
                      <IoCloseOutline className="text-xl cursor-pointer" />
                    </div>
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
          <hr />
          <div className="flex mt-2 px-2 justify-between">
            <h1 className="font-Poppins font-medium">Total Price</h1>
            <h1>${totalPrice}</h1>
          </div>

          <div className="flex mt-4 gap-2">
            <Link onClick={() => setCardOpen(false)} to={"dashboard/viewcard"}>
              <button className="py-2 hover:opacity-80 transition-all uppercase bg-[#3fd0d4] px-4 text-white font-Poppins font-semibold">
                VIEW CARD
              </button>
            </Link>
            <button className="py-2 hover:opacity-80 transition-all uppercase bg-[#3fd0d4] px-4 text-white font-Poppins font-semibold">
              CHECK OUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCard;
