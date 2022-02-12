import React from "react";
import { ImgOffical, ImgOffical2, ImgOffical3 } from "./../Svg";
import "./cards.css";

function Cards() {
  const Card = [
    {
      svg: ImgOffical,
      name: "Количество производств",
    },
    {
      svg: ImgOffical2,
      name: "Экспортирумый государство",
    },
    {
      svg: ImgOffical3,
      name: "Опыт в сфере производство игрушек",
    },
    {
      svg: ImgOffical3,
      name: "Экспортирумый государство",
    },
  ];
  const rendom =  Math.floor(Math.random() * 6);
  return (
    <>
      <div className="cards">
        <div className="cardsText">
          <p>инфографика</p>
          <h1>Мы в числах</h1>
        </div>
        <div className="cardsMain">
          {Card.map((data, index) => {
            return (
              <div className="card" key={index} style={{ "--i": rendom }}>
                <data.svg />
                <p>{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cards;
