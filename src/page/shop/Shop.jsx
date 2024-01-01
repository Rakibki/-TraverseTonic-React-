import Cover from "../../components/cover/Cover";
import shopImage from "../../assets/image/aboutVidero.jpg";
import Loader from "../../components/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import SingleProduct from "../../components/singleProduct/SingleProduct";

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
        <div>filter</div>
        <div className="grid p-8 gap-3 grid-cols-4 my-10">
          <div className="col-span-3 grid grid-cols-3 gap-3 p-4">
            {
              data?.map((item) => <SingleProduct product={item} key={item?._id} />)
            }
          </div>
          <div>fdffsdff</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
