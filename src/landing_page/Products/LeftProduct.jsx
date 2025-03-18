import React from "react";
import "./Product.css";
import { useState } from "react";

const LeftProduct = ({
  ProductImg,
  ProductName,
  ProductDetails,
  Demo,
  Learn,
  PlayStore,
  AppStore,
}) => {
  const [hoverProduct, setHoverProduct] = useState("");

  const handleHover = (hoverItem) => {
    setHoverProduct(hoverItem);
  };
  return (
    <div className="container leftContainer p-4">
      <div className="row px-5">
        <div
          className={`col-md-6 col-12 col-left ${
            hoverProduct === "hover" ? "hover" : ""
          }`}
          onMouseEnter={() => handleHover("hover")}
          onMouseLeave={() => handleHover("")}
        >
          <img src={ProductImg} alt="" />
        </div>
        <div className="col-md-6 col-12 px-5 col-right">
          <h2>{ProductName}</h2>
          <p>{ProductDetails}</p>
          <a href="">{Demo}</a>
          <a href="">{Learn}</a>
          <div className="mt-4 stores">
            <img src={PlayStore} alt="Download on Play Store" />
            <img src={AppStore} alt="Download on App Store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftProduct;
