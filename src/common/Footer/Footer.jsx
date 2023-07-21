import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer_inner">
        <div id="footer">
          <div className="main-footer">
            <div className="logoinfo" data-aos="fade-up">
              <h2>Onlne Store</h2>

              <div className="contact-details">
                <h1>Contact Us</h1>
                <li>
                  <div className="fa fa-phone"></div>
                  <a href="tel:+9779876543210">+977-9876543210</a>
                </li>
                <li>
                  <div className="fa fa-envelope"></div>
                  <a href="mailto:example@gmail.com">example@gmail.com</a>
                </li>
              </div>
            </div>
            <div className="com " data-aos="fade-up">
              <h1>About</h1>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="info" data-aos="fade-up">
              <h1>Social Media</h1>
              <div className="sociallogos">
                <div className="logobox">
                  <Link
                    to="https://www.facebook.com/rohan.chaulagain.5"
                    target="_blank"
                  >
                    <i className="ri-facebook-circle-fill"></i>
                  </Link>
                  <Link to="https://github.com/rohach" target="_blank">
                    <i className="ri-github-fill"></i>
                  </Link>
                  <Link
                    to="https://www.instagram.com/rohanchaulagain/"
                    target="_blank"
                  >
                    <i className="ri-instagram-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <footer>© Your Copyright 2023 All Rights Reserved</footer>
        </div>
      </section>
    </div>
  );
};

export default Footer;
