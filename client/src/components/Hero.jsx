import React from "react";
import image from "../images/hero.webp";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
        At MyDocScheduler, your well-being is our priority. We are committed to offering a seamless and reliable way to schedule appointments with trusted doctors. Whether you need a routine checkup, specialized treatment, or consultation, MyDocScheduler empowers you to take control of your healthcare journey. With just a few clicks, find, book, and get ready for your appointment.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
