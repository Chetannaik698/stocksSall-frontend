import React from "react";

const Hero = () => {
  return (
    <div className="container hero" style={{marginTop:"6rem"}}>
      <div className="row">
        <img src="public/landing.png" className="hero" alt="" />
      </div>
      <div className="row hero-content">
        <h1 className="mt-4">Learn and Earn</h1>
        <p className="mt-2">
          Empowering you to invest wisely in stocks, mutual funds, ETFs, and
          more—all in one place
        </p>
        <button>Sign up for free</button>
      </div>
    </div>
  );
};

export default Hero;
