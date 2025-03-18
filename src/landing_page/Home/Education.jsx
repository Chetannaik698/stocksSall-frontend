import React from "react";

const Education = () => {
  return (
    <div className="container p-5 mt-5 ecosystem">
      <div className="row mt-5 px-2">
        <div className="col-12 col-md-6 px-5">
          {/* Added col-12 for small screens and col-md-8 for medium and larger screens */}
          <img src="/index-education.svg" alt="" className="img-fluid" />
          {/* Added img-fluid class to make the image responsive */}
        </div>
        <div className="col-12 col-md-6">
          {/* Added col-12 for small screens and col-md-4 for medium and larger screens */}
          <h2>Free and open market education</h2>
          <p className="mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#">
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#">
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
