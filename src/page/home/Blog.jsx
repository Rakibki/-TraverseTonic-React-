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

  return (
    <div className="grid px-20 items-center grid-cols-6">
      <div className="col-span-4">
        <h2 className="text-4xl mb-3 font-bold">From Our Blog</h2>
        <p className="font-Poppins text-lg mb-6 text-[#585858]">
          From Our Blog Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Aene an <br /> commodo ligula eget dolor. Aenean massa. Cum
          sociis the
        </p>

        {data?.length > 0 && (
          <div>
            {data?.slice(0, 2).map((item) => {
              return (
                <div className="grid gap-3 mb-4 grid-cols-4" key={item?._id}>
                  <div className="h-[150px]">
                    <img
                      className="w-full h-full"
                      src={item?.mainImage}
                      alt=""
                    />
                  </div>
                  <div className="col-span-3">
                    <h1 className="text-2xl font-bold">{item?.title}</h1>
                    <p className="font-Poppins mt-2 mb-2 text-[#585858]">
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
              );
            })}
          </div>
        )}
      </div>
      <div className="col-span-2">
        <img src={blog} alt="" />
      </div>
    </div>
  );
};

export default Blog;
