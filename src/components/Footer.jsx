import React from "react";
import './Footer.css';
import { FaDiscord, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container ">
        {/* 2nd column */}

        <div className="footer-contact">
          <h2>Services</h2>
          <p>Certifiaction Courses</p>
          <p>Placement Assistant</p>
          <p>Digital Marketing</p>
          <p>Training Program</p>
        </div>

        <div className="footer-subscribe">
          <h2>Subscribe to get important updates</h2>
          <form action="#">
            <input
              type="email"
              required
              autoComplete="off"
              placeholder="Email"
            />
            <input type="submit" value="Subscribe" />
          </form>
        </div>

        {/* 3rs column  */}
        <div className="footer-social">
          <h2>Follows Us</h2>
          <div className="footer-social--icons">
            <div>
              <a href=" https://w" target="_blank" rel="noreferrer">
                <FaDiscord className="icons" />
              </a>
            </div>
            <div>
              <a href=" https://w" target="_blank" rel="noreferrer">
                <FaInstagram className="icons" />
              </a>
            </div>
            <div>
              <a href=" https://w" target="_blank" rel="noreferrer">
                <FaTwitter className="icons" />
              </a>
            </div>
            <div>
              <a href="https://ww" target="_blank" rel="noreferrer">
                <FaLinkedin className="icons" />
              </a>
            </div>
          </div>
        </div>

        {/* 4th column  */}
        <div className="footer-contact">
          <h2>Connect with us</h2>
          <p>support@shoppealtech.com</p>
          <p>++91 7304663195</p>
          <p>Kalyan, Maharashtra - 421306</p>
          <p>UDYAM-MH-33-0152813</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
