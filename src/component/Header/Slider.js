import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Arrow } from "../Svg";

export default function App() {
  const SlideData = [
    {
      name: "Safe and attractive",
      img: "/img/kamaz.png",
    },
    {
      name: "Safe and attractive",
      img: "/img/kamaz2.png",
    },
    {
      name: "Safe and attractive",
      img: "/img/kamaz3.png",
    },
  ];
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper Swiper"
      >
        {SlideData.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="Intro">
                <div className="homeLeft">
                  <h1>{data?.name}</h1>
                  <button>
                    подробнее <Arrow />
                  </button>
                </div>
                <div className="homeRight">
                  <img className="introImg" src={data?.img} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
