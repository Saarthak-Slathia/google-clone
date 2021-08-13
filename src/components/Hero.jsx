import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import logo from "./img/google.png";
import speak from "./img/speak.png";
import "./Hero.css";

const Hero = () => {
  const search_result = () => {
    const input = document.getElementById("search");
    let input_val = input.value;
    window.location.href = `https://www.google.com/search?q=${input_val}`;
  };

  return (
    <>
      <section id="hero">
        <img src={logo} alt="google" />
        <div className="search">
          <SearchIcon className="search__icon" />
          <input
            type="text"
            name="search"
            id="search"
            className="searchbar"
            placeholder="Search Google..."
          />
          <img src={speak} alt="" className="speak" />
        </div>
        <div className="btns">
          <button className="searchbtn" onClick={search_result}>
            Google Search
          </button>
          <button className="lucky">I'm feeling lucky</button>
        </div>
      </section>
    </>
  );
};

export default Hero;
