import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="top">
          <h3 className="location">India</h3>
        </div>
        <div className="bottom">
          <ul>
            <li>About</li>
            <li>Advertising</li>
            <li>Business</li>
            <li>How Search Works</li>
          </ul>
          <hr />
          <ul className="privacy">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Settings</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
