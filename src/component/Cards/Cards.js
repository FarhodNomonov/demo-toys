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
  return (
    <>
      <div className="cards">
        <div className="cardsText">
          <p>инфографика</p>
          <h1>Cтатистика в цифрах</h1>
        </div>
        <div className="cardsMain">
          {Card.map((data, index) => {
            return (
              <div className="card" key={index} >
                <data.svg />
                <p>{data.name}</p>
              </div>
            );
          })}
        </div>
        <div className="cardsTextBottom">
          <p>
            С момента основания компании прошло 13 лет. В компании работает
            более 100 специалистов. На сегодняшний день. Компания производит
            более 350 видов игрушек и экспортирует их более чем в 7 стран мира{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Cards;
