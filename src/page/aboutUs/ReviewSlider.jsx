import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rate } from "antd";

const ReviewSlider = () => {
  const { isPending, data } = useQuery({
    queryKey: ["reviewss"],
    queryFn: () => fetch("reviews.json").then((res) => res.json()),
  });

  if (isPending) <Loader />;

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {data?.map((item) => {
        return (
          <SwiperSlide key={item?._id}>
            <img src={item?.image} className="mx-auto" alt="" />
            <p className="mt-4 w-[60%] mx-auto text-center font-Poppins text-lg">
              {item?.desc}
            </p>
            <div className="flex justify-center mt-4">
              <Rate
                disabled
                className="mx-auto text-[#3fd0d4]"
                defaultValue={item?.ratting}
              />
            </div>
            <h1 className="text-3xl font-Satisfy text-center text-[#3fd0d4] mt-4">{item?.name}</h1>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReviewSlider;
