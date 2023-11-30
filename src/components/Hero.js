import React from "react";
import "./Hero.css";
import HeroImg from "../assets/hero.img.png";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url('${HeroImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="hero"
    >
      <div className="background-media"></div>

      <div className="hero-content">
        <h1 className="hero-heading">Crafting Modern Web Experiences</h1>
        <p className="hero-subheading">
          Weaving digital magic through elegant and efficient code
        </p>
        <button className="cta-button">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
