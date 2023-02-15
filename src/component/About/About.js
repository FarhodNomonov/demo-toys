import React from "react";
import "./about.css";
import aboutLogo from "./img/about.png";
import { AboutArrow } from "./../Svg";

function About() {
  return (
    <div className="about">
      <div className="aboutImg">
        <img src={aboutLogo} alt="..." />
      </div>
      <div className="aboutText">
        <p>о нас</p>
        <h1>Cамый лучший производитель </h1>
        <span>
          Компания была основана в 2009 году и сейчас производит сотни игрушек.
          Компания производит различные виды пластиковых игрушек для детей, а
          также экспортирует их по всему миру. Игрушки изготовлены из
          высококачественного пластика с использованием современных технологий
        </span>
        <div className="aboutTextBtn">
          <button>
            подробнее <AboutArrow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
