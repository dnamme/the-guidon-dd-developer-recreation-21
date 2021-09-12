import logo from "./../../img/logo-white.png";
import "./styles.css";

function Header() {
  return (
    <header>
      <div id="bg">
        <img src="https://lorempixel.com/1920/1080" alt="placeholder" />
      </div>
      <div id="content">
        <img src={logo} alt="The GUIDON logo" />
        <h1>Hold the Truth to Power.</h1>
        <h2>COA RECWEEK 2021</h2>
        <h2>SEPTEMBER 6-18</h2>
      </div>
    </header>
  );
}

export default Header;
