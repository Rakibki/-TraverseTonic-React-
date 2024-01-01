import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";

const Products = () => {
  const { isPending, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("products.json").then((res) => res.json()),
  });

  if (isPending) <Loader />;

  return <div>Products{data?.length}</div>;
};

export default Products;
