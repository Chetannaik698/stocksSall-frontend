import React from "react";
import Hero from "./Hero";
import EcoSystem from "./EcoSystem";
import PriceDeatil from "./PriceDeatil";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import "./Home.css";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <EcoSystem />
      <PriceDeatil />
      <Education />
      <OpenAccount />
    </div>
  );
};

export default HomePage;
