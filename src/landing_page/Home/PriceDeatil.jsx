import React from "react";

const PriceDeatil = () => {
  return (
    <div className="container px-5 price">
      <div className="row p-4">
        <div className="col-md-6 col-12">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#">See pricing <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-md-6 col-12">
          <div className="row">
            <div className="col-md-4 col-12 ">
              <img src="/pricing-eq.svg" alt="" /><br />
              <small> Free account opening</small>
            </div>
            <div className="col-md-4 col-12 ">
              <img src="/pricing-eq.svg" alt="" /><br />
              <small>  Free equity delivery
              and direct mutual funds</small>
            </div>
            <div className="col-md-4 col-12  ">
              <img src="/other-trades.svg" alt="" /><br />
              <small> Free account opening</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDeatil;
