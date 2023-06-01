import { useEffect, useRef } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/bundle";
import NewProductCard from "../../Pages/NewProduct/NewProductCard";

SwiperCore.use([Navigation]);

const MySlide = () => {
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
    <div className="mt-20 mx-auto max-w-[1200px]">
      <div className="mt-60">
        <Swiper className="h-full px-3" ref={swiperRefDes}>
          <div className="swiper-wrapper">
            {/* show last added 10 product */}
            <SwiperSlide>
              <div className="image-container">
                <img
                  className="w-[100%] h-full"
                  src="https://bmabazar.com/wp-content/uploads/2019/07/t-1.jpg"
                  alt="car!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img
                  className="w-[100%] h-full"
                  src="https://bmabazar.com/wp-content/uploads/2019/07/t-1.jpg"
                  alt="car!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img
                  className="w-[100%] h-full"
                  src="https://bmabazar.com/wp-content/uploads/2019/07/t-1.jpg"
                  alt="car!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img
                  className="w-[100%] h-full"
                  src="https://bmabazar.com/wp-content/uploads/2019/07/t-1.jpg"
                  alt="car!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img
                  className="w-[100%] h-full"
                  src="https://bmabazar.com/wp-content/uploads/2019/07/t-1.jpg"
                  alt="car!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img
                  className="w-[100%] h-full"
                  src="https://bmabazar.com/wp-content/uploads/2019/07/t-1.jpg"
                  alt="car!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img
                  className="w-[100%] h-full"
                  src="https://bmabazar.com/wp-content/uploads/2019/07/t-1.jpg"
                  alt="car!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img
                  className="w-[100%] h-full"
                  src="https://bmabazar.com/wp-content/uploads/2019/07/t-1.jpg"
                  alt="car!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img
                  className="w-[100%] h-full"
                  src="https://bmabazar.com/wp-content/uploads/2019/07/t-1.jpg"
                  alt="car!"
                />
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
};
export default MySlide;
