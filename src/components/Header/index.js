import { useState, useEffect } from "react";

import logo from "./../../img/logo-white.png";
import "./styles.css";

function Header() {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let images = document.getElementsByClassName("header-img");

      images[imgIdx + 1 >= 5 ? 0 : imgIdx + 1].classList.toggle("faded");

      setTimeout(() => {
        images[imgIdx].classList.toggle("faded");

        let newImgIdx = imgIdx + 1;
        setImgIdx(newImgIdx < 5 ? newImgIdx : 0);
      }, 1000);
    }, 5000);

    return () => clearInterval(timer);
  });

  return (
    <header>
      <div id="bg">
        <img
          className="header-img"
          src="https://source.unsplash.com/1600x900/?nature"
          alt="random nature"
        />
        <img
          className="header-img faded"
          src="https://source.unsplash.com/1600x900/?society"
          alt="random society"
        />
        <img
          className="header-img faded"
          src="https://source.unsplash.com/1600x900/?landscape"
          alt="random landscape"
        />
        <img
          className="header-img faded"
          src="https://source.unsplash.com/1600x900/?technology"
          alt="random technology"
        />
        <img
          className="header-img faded"
          src="https://source.unsplash.com/1600x900/?news"
          alt="random news"
        />
      </div>
      <div id="content">
        <img src={logo} alt="The GUIDON logo" />
        <h1>Hold the Truth to Power.</h1>
        <h3>COA RECWEEK 2021</h3>
        <h3>SEPTEMBER 6-18</h3>
      </div>
    </header>
  );
}

export default Header;
