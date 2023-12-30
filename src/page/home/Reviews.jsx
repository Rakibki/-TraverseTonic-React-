import { Parallax } from "react-parallax";
import review from "../../assets/image/review.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Loader from "../../components/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { Rate } from "antd";

const Reviews = () => {
  const { isPending, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => fetch("reviews.json").then((res) => res.json()),
  });

  console.log(data);

  if (isPending) <Loader />;

  return (
    <Parallax
      bgImage={review}
      className="py-20"
      bgImageAlt="the cat"
      strength={200}
    >
      <div>
        <h1 className="text-5xl mb-3 text-white font-bold text-center">
          Top Reviews
        </h1>
        <h1 className="text-xl mb-6 text-white text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />{" "}
          Aenean commodo ligula eget dolor. Aenean massa. Cu
        </h1>

        <div>
          <div>
            <Swiper
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              slidesPerView={3}
              spaceBetween={15}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {data?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="bg-white p-8 grid grid-cols-3 rounded-xl">
                      <img src={item?.image} alt="" />
                      <div className="col-span-2">
                        <h1 className="text-xl font-bold">{item?.title}</h1>
                        <Rate
                          disabled
                          className="text-sm text-[#3fd0d4] mt-1 mb-2"
                          defaultValue={item?.ratting}
                        />
                        <p className="font-Poppins text-[#505050]">
                          {item?.desc?.slice(0, 50)}...
                        </p>
                        <h1 className="text-base font-bold">{item?.name}</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Reviews;
