import React from "react";
import "./SupportPage.css"; // Import the CSS file

const SupportPage = () => {
  return (
    <div className="support-container p-5 mt-5">
      <h1 className="support-title">To create a ticket, select a relevant topic</h1>
      <div className="support-grid">
        <div className="support-section mt-3">
          <h2 className="support-section-title">Account Opening</h2>
          <ul className="support-list">
            <li className="support-list-item">Resident individual</li>
            <li className="support-list-item">Minor</li>
            <li className="support-list-item">Non Resident Indian (NRI)</li>
            <li className="support-list-item">Company, Partnership, HUF and LLP</li>
            <li className="support-list-item">Glossary</li>
          </ul>
        </div>

        <div className="support-section mt-3">
          <h2 className="support-section-title">Funds</h2>
          <ul className="support-list">
            <li className="support-list-item">Add money</li>
            <li className="support-list-item">Withdraw money</li>
            <li className="support-list-item">Add bank accounts</li>
            <li className="support-list-item">eMandates</li>
          </ul>
        </div>

        <div className="support-section mt-3">
          <h2 className="support-section-title">Your StckStall Account</h2>
          <ul className="support-list">
            <li className="support-list-item">Your Profile</li>
            <li className="support-list-item">Account modification</li>
            <li className="support-list-item">Client Master Report (CMR) and Depository Participant (DP)</li>
            <li className="support-list-item">Nomination</li>
            <li className="support-list-item">Transfer and conversion of securities</li>
          </ul>
        </div>

        <div className="support-section">
          <h2 className="support-section-title">Console</h2>
          <ul className="support-list">
            <li className="support-list-item">Portfolio</li>
            <li className="support-list-item">Corporate actions</li>
            <li className="support-list-item">Funds statement</li>
            <li className="support-list-item">Reports</li>
            <li className="support-list-item">Profile</li>
            <li className="support-list-item">Segments</li>
          </ul>
        </div>

        <div className="support-section">
          <h2 className="support-section-title">Kite</h2>
          <ul className="support-list">
            <li className="support-list-item">IPO</li>
            <li className="support-list-item">Trading FAQs</li>
            <li className="support-list-item">Margin Trading Facility (MTF) and Margins</li>
            <li className="support-list-item">Charts and orders</li>
            <li className="support-list-item">Alerts and Nudges</li>
            <li className="support-list-item">General</li>
          </ul>
        </div>

        <div className="support-section">
          <h2 className="support-section-title">Coin</h2>
          <ul className="support-list">
            <li className="support-list-item">Understanding mutual funds and Coin</li>
            <li className="support-list-item">Coin app</li>
            <li className="support-list-item">Coin web</li>
            <li className="support-list-item">Transactions and reports</li>
            <li className="support-list-item">National Pension Scheme (NPS)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
