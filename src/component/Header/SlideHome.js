import React from "react";
import Slider from "./Slider";
import "./slider.css";
import { Dowload } from "../Svg";

function SlideHome() {
  return (
    <div className="home header">
      <Slider />
      <div className="dowloadCard">
        <a href="/img/pdf.pdf" download='pdf'>
          <button>
            <Dowload />
            Скачать каталог
          </button>
        </a>
      </div>
    </div>
  );
}

export default SlideHome;
