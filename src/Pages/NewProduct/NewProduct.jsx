import NewProductCard from "./NewProductCard";
import { useEffect, useRef } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/bundle";
import product1 from "../../assets/new-products/product-1.jpeg";
import product2 from "../../assets/new-products/product-2.jpeg";
import product3 from "../../assets/new-products/product-3.jpeg";
import product4 from "../../assets/new-products/product-4.jpeg";
import product5 from "../../assets/new-products/product-5.jpeg";
import product6 from "../../assets/new-products/product-6.jpeg";
import product7 from "../../assets/new-products/product-7.jpeg";
import product8 from "../../assets/new-products/product-8.jpeg";

SwiperCore.use([Navigation]);

export const NewProduct = () => {
  const products = [
    { id: 1, img: product1 },
    { id: 2, img: product2 },
    { id: 3, img: product3 },
    { id: 4, img: product4 },
    { id: 5, img: product5 },
    { id: 6, img: product6 },
    { id: 7, img: product7 },
  ];

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
      </div>
      <div className="my-10">
        <Swiper className="h-full px-3" ref={swiperRefDes}>
          <div className="swiper-wrapper">
            {/* show last added 10 product */}
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <NewProductCard product={product} />
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
};
