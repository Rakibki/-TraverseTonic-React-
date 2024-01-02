import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Cover from "../cover/Cover";
import image from "../../assets/image/aboutVidero.jpg";
import { Rate } from "antd";

const ProductDetails = () => {
  const { id } = useParams();

  const { isPending, data } = useQuery({
    queryKey: ["productss"],
    queryFn: async () => {
      const res = await fetch("/products.json");
      const result = await res.json();
      const product = result?.find((item) => item?._id === id);
      return product;
    },
  });

  return (
    <div>
      <Cover image={image} title={"Product Details"} />
      <div className="grid w-[90%] mx-auto shadow-xl mt-10 gap-6 items-center p-10 grid-cols-2">
        <div>
          <img src={data?.images[0]} alt="" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">{data?.name}</h1>
          <h1 className="text-xl mt-2 font-bold">${data?.price}</h1>

          <div className="mt-8 flex items-center gap-3">
            <Rate
              disabled
              className="text-[#3fd0d4]"
              defaultValue={data?.ratting}
            />
            <h1>(1 customer review)</h1>
          </div>
          <p className="font-Poppins mt-6">{data?.desc}</p>

          <div className="mt-8">
            <p className="font-Poppins flex mb-2 items-center">
              <p className="font-semibold font-Poppins">SKU</p>: 010
            </p>
            <p className="font-Poppins flex mb-2 items-center">
              <p className="font-semibold font-Poppins">Category</p>:{" "}
              {data?.Category}
            </p>
            <p className="font-Poppins flex mb-2 items-center">
              <p className="font-semibold font-Poppins">Tags</p>:{" "}
              {data?.Tags.map((item) => (
                <p className="font-Poppins mr-1" key={item}>
                  {item},
                </p>
              ))}
            </p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default ProductDetails;
