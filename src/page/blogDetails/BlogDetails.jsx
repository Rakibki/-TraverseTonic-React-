import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";

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

  return <div>BlogDetails</div>;
};

export default BlogDetails;
