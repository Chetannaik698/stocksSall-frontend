import React from "react";

const EcoSystem = () => {
  return (
    <div className="container p-5 mt-5  ecosystem">
      <h1 className="p-4 mt-4">Trust with confidence</h1>
      <div className="row p-4">
        <div className="col-12 col-md-4">
          {/* Added col-12 for small screens and col-md-4 for medium and larger screens */}
          <h3 className="">Customer-first always</h3>
          <p>
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h3 className="mt-4">No spam or gimmicks</h3>
          <p>
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h3 className="mt-4">The Zerodha universes</h3>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="mt-4">Do better with money</h3>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-md-8 px-5">
          {/* Added col-12 for small screens and col-md-8 for medium and larger screens */}
          <img src="/ecosystem.png" alt="" className="img-fluid" />
          {/* Added img-fluid class to make the image responsive */}
        </div>
      </div>
    </div>
  );
};

export default EcoSystem;
