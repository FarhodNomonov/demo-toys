import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { Muted, Call, Sound, SoundLow } from "../Svg";
import Music from "./music/music.mp3";

function Header() {
  const audioPlayer = useRef();
  const [volume, setVolume] = useState(0);
  const [Playing, setPlaying] = useState("n");

  const Play = () => {
    audioPlayer.current.volume = volume / 100;
    audioPlayer.current.play();
  };
  const pause = () => {
    setPlaying("n");
    audioPlayer.current.pause();
  };

  return (
    <div className="header">
      <audio src={Music} volume={volume} ref={audioPlayer} />
      <header>
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
              <span>Showroom</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/#Partner" className={"no_active"}>
              <span>Partner</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/#Contact" className={"no_active"}>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
        <div className="headerControl">
          <div className="headerMuted">
            <div
              className="muted"
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (Playing === "s" || Playing === "l") {
                  setPlaying("n");
                  pause();
                }
                if (Playing === "n") {
                  setPlaying("s");
                  Play();
                }
              }}
            >
              {Playing === "n" && <Muted />}
              {Playing === "s" && <Sound />}
              {Playing === "l" && <SoundLow />}
            </div>
            <div className="slidecontainer">
              <input
                type="range"
                min="0"
                max="100"
                defaultValue={volume}
                className="slider"
                id="myRange"
                onChange={(e) => {
                  Play(e.target.value, 10);
                  setVolume(parseInt(e.target.value, 10));
                  if (volume < 1) {
                    setPlaying("n");
                  }
                  if (volume > 1) {
                    setPlaying("l");
                  }
                  if (volume > 50) {
                    setPlaying("s");
                  }
                }}
              />
            </div>
          </div>
          <div className="language">
            <select
              name=""
              id=""
              style={{ cursor: "pointer", outline: "none" }}
            >
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
