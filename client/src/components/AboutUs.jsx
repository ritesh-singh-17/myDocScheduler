import React from "react";
import image from "../images/about3.png";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            At MyDocScheduler, we believe that health should be accessible, efficient, and stress-free. Our platform is dedicated to connecting patients with top healthcare professionals, simplifying the process of booking appointments, and ensuring that you receive the care you need—right when you need it. With MyDocScheduler, managing your health has never been easier.
            </p>
            <h3>Our Mission:</h3>
            <p>
            Our mission is to simplify the healthcare journey by connecting patients with a wide network of qualified doctors and specialists. We aim to eliminate the frustration of traditional appointment booking, offering a platform that is both intuitive and responsive.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
