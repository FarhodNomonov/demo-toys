import React from "react";
import "./about.css";
import aboutLogo from "./img/about.png";
import { Arrow, AboutArrow } from "./../Svg";

function About() {
  return (
    <div className="about">
      <div className="aboutImg">
        <img src={aboutLogo} />
      </div>
      <div className="aboutText">
        <p>о нас</p>
        <h1>Cамый лучший производителть </h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magnafringilla urna, porttitor
          rhoncus dolor purus non enim praesent elementum facilisis leo, vel
          fringilla est Lorem ipsum dolor sit amet, consectetur adipiscing elit
          ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla
          urna, porttitor.{" "}
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
