import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";
import Cover from "../../components/cover/Cover";
import coverImage from "../../assets/image/blog.jpg"

const Blog = () => {
  
  const { isPending, data } = useQuery({
    queryKey: ["blog"],
    queryFn: () => fetch("blogs.json").then((res) => res.json()),
  });


  if(isPending) <Loader />
  
  return (
    <div>
      <Cover image={coverImage} title={"Blog List"} />

      <div className="mt-10">
        {
          data?.map((item) => {
            return <div key={item?._id}>
              <img src={item?.mainImage} alt="" />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Blog