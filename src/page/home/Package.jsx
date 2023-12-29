import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Package = () => {
  const { isPending, data } = useQuery({
    queryKey: ["package"],
    queryFn: () => fetch("package.json").then((res) => res.json()),
  });

  if (isPending) <Loader />;

  return (
    <div className="z-0">
      <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data?.map((item) => {
          return (
            <SwiperSlide key={item?._id}>
              <img src={item?.image} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Package;
