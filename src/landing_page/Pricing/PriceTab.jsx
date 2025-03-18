import React from "react";
import "./Pricing.css";

const PriceTab = () => {
  return (
    <div className="container p-5">
      <h3>Charges for account opening</h3>
      <div className="row">
        <table>
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>

          <tr>
            <td>Online account</td>
            <td><span>Free</span></td>
          </tr>

          <tr className="gray">
            <td>Offline account</td>
            <td><span>Free</span></td>
          </tr>

          <tr>
            <td>NRI account (offline only)</td>
            <td>₹ 500</td>
          </tr>

          <tr className="gray">
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹ 500</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default PriceTab;
