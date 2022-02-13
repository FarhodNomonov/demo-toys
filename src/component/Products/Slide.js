import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Slide() {
  const Slide = [
    {
      img: "/img/produc1.png",
      title: "Игрушки для уморазвития",
    },
    {
      img: "/img/produc2.png",
      title: "Игрушка для девчонок",
    },
    {
      img: "/img/produc4.png",
      title: "Конструкторы",
    },
    {
      img: "/img/produc3.png",
      title: "Машинки и модели",
    },
    {
      img: "/img/produc4.png",
      title: "Игрушки для уморазвития",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={0}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper custome"
      >
        {Slide.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="slideImem productsCard">
                <div className="productsCard">
                  <img src={data?.img} alt="" />
                </div>
                
              </div>
              <p>{data?.title}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
