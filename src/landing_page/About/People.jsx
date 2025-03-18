import React from "react";

const People = () => {
  return (
    <div className="container p-5 people">
      <div className="row p-5">
        <h3 className="text-center">People</h3>
        <div className="col-md-6 col-12 img-col mt-3">
          <img src="public\nithin-kamath.jpg" alt="" />
          <p>Nithin Kamath</p>
          <small >Founder, CEO</small>
        </div>
        <div className="col-md-6 col-12">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage / TradingQnA / Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default People;
