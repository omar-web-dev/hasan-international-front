import NewProductCard from "./NewProductCard";
import { useEffect, useRef } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/bundle";

SwiperCore.use([Navigation]);

export const NewProduct = () => {
  const swiperRefDes = useRef(null);

  useEffect(() => {
    new SwiperCore(".swiper", {
      slidesPerView: 4,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="mt-20">
      <div className="text-center max-w-[600px] mx-auto">
        <h2 className="my_h2">New Products</h2>
        <p className="text-lg">
          A perfect blend of creativity, energy, communication, happiness and
          love. Let us arrange a smile for you.
        </p>
      </div>
      <div className="my-10">
        <Swiper className="h-full px-3" ref={swiperRefDes}>
          <div className="swiper-wrapper">
            {/* show last added 10 product */}
            <SwiperSlide>
               <NewProductCard />
            </SwiperSlide>
            <SwiperSlide>
               <NewProductCard />
            </SwiperSlide>
            <SwiperSlide>
               <NewProductCard />
            </SwiperSlide>
            <SwiperSlide>
               <NewProductCard />
            </SwiperSlide>
            <SwiperSlide>
               <NewProductCard />
            </SwiperSlide>
            <SwiperSlide>
               <NewProductCard />
            </SwiperSlide>
            <SwiperSlide>
               <NewProductCard />
            </SwiperSlide>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
};
