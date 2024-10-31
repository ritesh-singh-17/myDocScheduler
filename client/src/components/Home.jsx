import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";
import WhyChooseUs from "../components/WhyChooseUs";
import OurMission from "../components/OurMission";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurMission/>
      <WhyChooseUs/>
      <HomeCircles />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
