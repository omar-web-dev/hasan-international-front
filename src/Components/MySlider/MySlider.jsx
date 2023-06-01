import { useEffect, useRef } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/bundle";
import app1 from '../../assets/app-1.jpeg';
import app2 from '../../assets/app-2.jpeg';
import app3 from '../../assets/app-3.jpeg';
import app4 from '../../assets/app-4.jpeg';
import app5 from '../../assets/app-5.jpeg';
import app6 from '../../assets/app-6.jpeg';
import app7 from '../../assets/app-7.jpeg';
import app8 from '../../assets/app-8.jpeg';
import app9 from '../../assets/app-9.png';


SwiperCore.use([Navigation]);

const sliderInfo = [ 
  {id : 1, image : '', alt : 'application-1'},
  {id : 2, image : '', alt : 'application-2'},
  {id : 3, image : '', alt : 'application-3'},
  {id : 4, image : '', alt : 'application-4'},
  {id : 5, image : '', alt : 'application-5'},
  {id : 6, image : '', alt : 'application-6'},
  {id : 7, image : '', alt : 'application-7'},
  {id : 8, image : '', alt : 'application-8'},
  {id : 9, image : '', alt : 'application-9'},
]

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
      <div className="text-center max-w-[600px] mx-auto">
        <h2 className="my_h2">Application</h2>
        
      </div>
      <div className="mt-20">
        <Swiper className="h-full px-3" ref={swiperRefDes}>
          <div className="swiper-wrapper">
            {/* show last added 10 product */}
            <SwiperSlide>
              <div className="image-container">
                <img
                  className="w-[100%] h-full"
                  src={app1}
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
