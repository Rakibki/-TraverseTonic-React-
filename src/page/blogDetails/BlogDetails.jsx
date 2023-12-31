import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Cover from "../../components/cover/Cover";
import blogDatilsImg from "../../assets/image/blogDatils.jpg"

const BlogDetails = () => {
  const { id } = useParams();

  const { isPending, data } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
        const res = await fetch("/blogs.json")
        const result = await res.json();
        const blog = result.find((item) => item?._id == id)
        return blog
    }
  });


  if(isPending) <Loader />

  return <div>
    <Cover image={blogDatilsImg} title={data?.title} />

    <div className="my-20">

    </div>
  </div>;
};

export default BlogDetails;
