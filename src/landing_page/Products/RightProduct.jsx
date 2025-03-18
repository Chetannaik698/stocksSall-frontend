import React, { use, useState } from "react";
import "./Product.css";

const RightProduct = ({ ProductImg, ProductName, ProductDetails, Demo }) => {
  const [hoverProduct, setHoverProduct] = useState("");

  const handleHover = (hoverItem) => {
    setHoverProduct(hoverItem);
  };

  return (
    <div className="container rightContainer">
      <div className="row px-5">
        <div className="col-md-6 col-12 px-5 col-right col-left">
          <div className="right-text">
            <h2>{ProductName}</h2>
            <p>{ProductDetails}</p>
            <a href="">{Demo}</a>
          </div>
        </div>
        <div
          className={`col-md-6 col-12 col-left col-right right-img ${
            hoverProduct === "hover" ? "hover" : ""
          }`}
          onMouseEnter={() => handleHover("hover")}
          onMouseLeave={() => handleHover("")}
        >
          <img src={ProductImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightProduct;
