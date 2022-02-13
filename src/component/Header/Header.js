import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import "./header.css";
import { Muted, Call } from "../Svg";

function Header() {
  const [volume, setVolume] = useState(0);
  const changer = (e) => {
    setVolume(e.target.value / 100);
  };

  return (
    <div className="header">
      <header>
        <ReactAudioPlayer
          src="https://www.fesliyanstudios.com/musicfiles/2019-05-04_-_I_Was_Joking_-_David_Fesliyan.mp3"
          autoPlay={true}
          volume={volume}
          onPlay={(e) => console.log("onPlay")}
          onAbort={(e) => console.log("onAbort")}
          onError={(e) => console.log("onError ")}
        />

        <div className="headerLogo">
          <img src="/img/logo.png" alt="" />
        </div>
        <ul>
          <li>
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/#Showroom" className={"no_active"}>
              {" "}
              <span>Showroom</span>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/#Partner" className={"no_active"}>
              {" "}
              <span>Partner</span>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/#Contact" className={"no_active"}>
              {" "}
              <span>Contact</span>{" "}
            </NavLink>
          </li>
        </ul>
        <div className="headerControl">
          <div className="headerMuted">
            <div className="muted">
              <Muted />
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
    </div>
  );
}

export default Header;
