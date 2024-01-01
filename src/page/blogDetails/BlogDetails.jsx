import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Cover from "../../components/cover/Cover";
import blogDatilsImg from "../../assets/image/blogDatils.jpg";
import { FaRegComment, FaUser } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const BlogDetails = () => {
  const { id } = useParams();

  const { isPending, data } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch("/blogs.json");
      const result = await res.json();
      const blog = result.find((item) => item?._id == id);
      return blog;
    },
  });

  if (isPending) <Loader />;

  return (
    <div>
      <Cover image={blogDatilsImg} title={data?.title} />

      <div className="my-20 gap-3 w-[90%] p-10 bg-white shadow-xl mx-auto grid grid-cols-4">
        <div className="col-span-3">
          <div className="w-full h-[450px]">
            <img className="w-full h-full" src={data?.mainImage} alt="" />
          </div>
          <h1 className="text-4xl mt-4 font-bold font-Poppins">
            {data?.title}
          </h1>
          <p className="font-Poppins text-lg mt-4">{data?.shortDesc}</p>
          <p className="font-Poppins mt-6">{data?.desc}</p>

          <div className="grid mt-4 gap-2 grid-cols-3">
            {data?.images?.map((item, index) => {
              return (
                <div className={`${index === 1 && "col-span-2"}`} key={item}>
                  <img src={item} />
                </div>
              );
            })}
          </div>

          <div className="flex mt-4 font-bold gap-8">
            <h1>{data?.date}</h1>
            <h1 className="flex gap-3 items-center">
              <FaRegComment className="hover:text-[#3fd0d4] cursor-pointer" />
              {data?.comments?.length} Comments
            </h1>
          </div>

          <div className="p-6 mt-10 items-center gap-3 grid grid-cols-4 shadow-2xl">
            <div>
              <img src={data?.author?.image} alt="" />
            </div>
            <div className="col-span-3">
              <h2 className="font-semibold font-Poppins text-2xl">
                {data?.author?.name}
              </h2>
              <p className="font-Poppins mt-4">{data?.author?.message}</p>
              <div className="flex gap-2  mt-3">
                <FaFacebookF />
                <FaTwitter />
                <IoLogoInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-xl mb-3 font-bold font-Poppins">About Me</h1>
          <img src={data?.author?.image2} alt="" />
          <p className="mt-2 font-Poppins">{data?.author?.message}</p>
          <h1 className="text-xl mb-2 mt-7 font-bold font-Poppins">
            Categories
          </h1>
          {data?.categories?.map((item, index) => (
            <p className="font-bold font-Poppins mb-1" key={index}>
              {item}
            </p>
          ))}

          <form className="mt-6 px-4 py-6 bg-[#3fd0d4]">
            <h1 className="text-xl text-white mb-2 font-bold font-Poppins">
              NewsLetter
            </h1>
            <p className="mb-6 font-Poppins text-white">
              If you have questions, do not hesitate to ask!
            </p>
            <div className="relative overflow-hidden">
              <input
                type="text"
                className="bg-[#6fdcdf] placeholder:text-white py-2 pl-10 w-full text-lg outline-none"
                placeholder="Name"
              />
              <FaUser className="absolute text-xl left-3 text-white top-[30%]" />
            </div>

            <div className="relative mt-2 overflow-hidden">
              <input
                type="email"
                className="bg-[#6fdcdf] placeholder:text-white py-2 pl-10 w-full text-lg outline-none"
                placeholder="E-mail"
              />
              <MdOutlineMail className="absolute placeholder:text-white text-xl left-3 text-white top-[30%]" />
            </div>

            <div className="mt-3 mb-4">
              <button className="py-3 uppercase hover:bg-[#6fdcdf] hover:text-white transition-all bg-white text-black font-Poppins font-semibold w-full">
                Subscribe
              </button>
            </div>
          </form>

          <h1 className="text-xl mb-3 font-bold mt-10 font-Poppins">
            Follow Me
          </h1>
          <div className="flex gap-2  mt-3">
            <div className="p-4 rounded-full bg-[#3fd0d4] hover:opacity-55 cursor-pointer text-white">
              <FaFacebookF />
            </div>
            <div className="p-4 rounded-full bg-[#3fd0d4] hover:opacity-55 cursor-pointer text-white">
              <FaTwitter />
            </div>
            <div className="p-4 rounded-full bg-[#3fd0d4] hover:opacity-55 cursor-pointer text-white">
              <IoLogoInstagram />
            </div>
            <div className="p-4 rounded-full bg-[#3fd0d4] hover:opacity-55 cursor-pointer text-white">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
