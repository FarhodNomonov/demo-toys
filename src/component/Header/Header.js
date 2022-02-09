import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import "./header.css";
import { Muted, Call } from "../Svg";
import Home from "./Home";
import HeaderBottom from "./HeaderBottom";

function Header() {
  const [volume, setVolume] = useState(0);
  const changer = (e) => {
    setVolume(e.target.value / 100);
  };
  return (
    <div className="header">
      <header>
        <div className="headerLogo">
          <img src="/img/logo.png" alt="" />
        </div>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/Showroom">Showroom</NavLink>
          </li>
          <li>
            <NavLink to="/Partner">Partner</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
        <div className="headerControl">
          <div className="headerMuted">
            <div className="muted">
              <Muted />
              <autoPlay
                src="/music/music.mp3"
                autoPlay={true}
                volume={volume}
                onPlay={volume}
              />
            </div>
            <div className="slidecontainer">
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="50"
                className="slider"
                id="myRange"
                onChange={changer}
              />
            </div>
          </div>
          <div className="language">
            <select name="" id="">
              <option value="Ru">Ru</option>
              <option value="Uz">Uz</option>
            </select>
          </div>
          <div className="headerCall">
            <Call />
            <p>90 1312000</p>
          </div>
        </div>
      </header>
      <Home />
      <HeaderBottom />
    </div>
  );
}

export default Header;
