import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./partnerSlider.css"

function PartnerSlider() {
  const Slide = [
    {
      img: "/img/partnerSlide1.png",
      title: "Игрушки для уморазвития",
    },
    {
      img: "/img/partnerSlide2.png",
      title: "Игрушка для девчонок",
    },
    {
      img: "/img/partnerSlide3.png",
      title: "Конструкторы",
    },
    {
      img: "/img/partnerSlide1.png",
      title: "Машинки и модели",
    },
    {
      img: "/img/partnerSlide1.png",
      title: "Игрушки для уморазвития",
    },
  ];
  return (
    <div className="partner_slide">
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
              <div
                className="slideImem partner_slide"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="">
                  <img src={data?.img} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default PartnerSlider;
