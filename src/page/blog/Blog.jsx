import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";
import Cover from "../../components/cover/Cover";
import coverImage from "../../assets/image/blog.jpg";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = () => {
  const { isPending, data } = useQuery({
    queryKey: ["blog"],
    queryFn: () => fetch("blogs.json").then((res) => res.json()),
  });

  if (isPending) <Loader />;

  return (
    <div>
      <Cover image={coverImage} title={"Blog List"} />

      <div className="my-16 grid overflow-hidden grid-cols-3 gap-6">
        {data?.map((item) => {
          return (
            <Link to={`/bolg-details/${item?._id}`} key={item?._id}>
              <div
                className="w-full cursor-pointer overflow-hidden"
              >
                <div className="h-[300px] overflow-hidden">
                  <img
                    className="hover:scale-125 h-full overflow-hidden transition-all w-full"
                    src={item?.mainImage}
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <h1 className="text-xl font-bold font-Poppins">
                    {item?.title}
                  </h1>
                  <p className="text-[#505050] mt-3 mb-4 font-Poppins">
                    {item?.shortDesc}
                  </p>
                  <div className="flex font-bold gap-8">
                    <h1>{item?.date}</h1>
                    <h1 className="flex gap-3 items-center">
                      <FaRegComment className="hover:text-[#3fd0d4] cursor-pointer" />
                      {item?.comments?.length} Comments
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
