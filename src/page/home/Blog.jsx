import blog from "../../assets/image/blog.png";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";
import { FaRegComment } from "react-icons/fa";

const Blog = () => {
  const { isPending, data } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => fetch("blogs.json").then((res) => res.json()),
  });

  if (isPending) <Loader />;

  console.log(data);

  return (
    <div className="grid px-20 items-center grid-cols-6">
      <div className="col-span-4">
        <h2 className="text-4xl font-bold">From Our Blog</h2>
        <p>
          Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
          quam semper libero, sit amet adipiscing sem
        </p>

        <div>
          {data?.slice(0, 2).map((item) => {
            return (
              <div className="grid gap-3 grid-cols-4" key={item?._id}>
                <div className="h-[150px]">
                  <img className="w-full h-full" src={item?.mainImage} alt="" />
                </div>
                <div className="col-span-3">
                  <h1 className="text-3xl font-bold">{item?.title}</h1>
                  <p>{item?.shortDesc}</p>
                  <div className="flex gap-8">
                    <h1>{item?.date}</h1>
                    <h1 className="flex gap-3 items-center">
                      <FaRegComment />
                      {item?.comments?.length}Comments
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-2">
        <img src={blog} alt="" />
      </div>
    </div>
  );
};

export default Blog;
