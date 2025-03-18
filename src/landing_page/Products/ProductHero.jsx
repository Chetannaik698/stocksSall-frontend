import React from "react";
import "./Product.css";

const ProductHero = () => {
  return (
    <div className="container text-center py-3 hero" style={{marginTop:"6rem"}}>
      <div className="row py-5">
        <h1>Zerodha Products</h1>
        <p>Sleek, modern, and intuitive trading platforms</p>
        <small>
          Check out our <a href="">investment offerings →</a>
        </small>
      </div>
    </div>
  );
};

export default ProductHero;
