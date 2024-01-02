import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";
import Cover from "../../components/cover/Cover";
import { getLocalStor } from "../../utils/localStoreg";
import SingleFoodRow from "./SingleFoodRow";
import Noticilation from "../../utils/Noticilation";

const ViewCard = () => {
  const lsCard = getLocalStor("card");
  const { isPending, data, refetch } = useQuery({
    queryKey: ["viewCarddd", lsCard],
    queryFn: () => fetch("/products.json").then((res) => res.json()),
  });

  if (isPending) {
    return <Loader />
  }

  const cardProducts = data?.filter((item) => lsCard.includes(item?._id));

  const handleDelete = (id) => {
    const find = lsCard.findIndex((item) => item === id)
    lsCard.splice(find, 1)
    localStorage.setItem('card', JSON.stringify(lsCard))
    Noticilation("success", "product deleted succesfully")
    refetch()
  };

  return (
    <div>
      <div>
        <Cover title={"Your Shopping Card"} />
      </div>

      {cardProducts?.length < 1 && (
        <p className="text-3xl font-semibold text-center text-[#ffa41f] my-6">
          There is no food on your card
        </p>
      )}

      <div>
        {cardProducts?.length > 0 && (
          <div className="mt-10 w-[90%] mx-auto p-6">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-white">
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cardProducts?.map((item) => (
                    <SingleFoodRow
                      handleDelete={handleDelete}
                      key={item?._id}
                      item={item}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCard;
