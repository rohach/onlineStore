import React, { useEffect, useRef } from 'react';
import home from '../../images/home.png';
import './home.css';
import Lottie from 'lottie-react';
import delivery from '../../animations/delivery.json';
import About from '../About/About';
import Reason from '../Reason/Reason';
import Testimonial from '../Testimonial/Testimonial';
import Products from '../Products/Products';

const Home = () => {
  return (
    <>
      <section>
        <div className="home">
          <div className="home_left">
            <h3>Easy way to make an order</h3>
            <h1>
              EXPERIENCE the convenience of{' '}
              <span style={{ color: 'var(--orange)' }}>online shopping.</span>
            </h1>
            <p>
              We’re the one-stop shop for all your ecommerce needs and we offer
              the convenience of online shopping. Shop the way you want to!
            </p>
            <div className="home_btn">
              <button className="btn_primary">Order now</button>
              <button className="btn_secondary">See all Products</button>
            </div>
            <div className="home_feature">
              <span className="home_single_feature">
                <i className="ri-car-line"></i> &nbsp; No Shipping charge
              </span>
              <span className="home_single_feature">
                <i className="ri-secure-payment-line hereko"></i> &nbsp;100%
                secure checkout
              </span>
            </div>
          </div>
          <div className="home_right">
            <Lottie animationData={delivery} />
          </div>
        </div>
      </section>
      <About />
      <Products />
      <Reason />
      <Testimonial />
    </>
  );
};

export default Home;
