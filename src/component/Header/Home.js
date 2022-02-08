import React from "react";
import { saveAs } from "file-saver";
import Slider from "./Slider";
import "./slider.css";
import { Dowload } from "./../Svg";
function Home() {
  return (
    <div className="home">
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

export default Home;
