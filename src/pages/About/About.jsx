import React from 'react';
import './about.css';
import home from '../../images/home.png';
import support from '../../images/support.png';
import secure from '../../images/secure.png';
import fast from '../../images/fast.png';

const About = () => {
  return (
    <section>
      <div className="about">
        <h3>What we serve</h3>
        <h2>
          Just sit back at home <br /> we will take care
        </h2>
        <p>
          Shop with confidence on our cutting-edge ecommerce platform! Your
          safety is our priority with encrypted transactions, while our
          user-friendly design ensures a seamless shopping spree. Discover
          top-quality products, unbeatable deals, and friendly customer support.
          Unleash the joy of shopping, worry-free!
        </p>
      </div>
      <div className="about_detail">
        <div className="about_inner">
          <img src={fast} alt="Quick delivery" />
          <h3>Quick Delivery</h3>
          <p>
            Speedy delivery to your doorstep, guaranteed making your shopping
            dreams come true.!
          </p>
        </div>
        <div className="about_inner">
          <img src={secure} alt="Secured" />
          <h3>Secured User data</h3>
          <p>
            Ironclad security for worry-free shopping. Your data is safe and
            protected with us.
          </p>
        </div>
        <div className="about_inner">
          <img src={support} alt="Support" />
          <h3>24/7 Customer Support</h3>
          <p>
            Dedicated customer support, just a click away! We're here to assist
            you at every step.
          </p>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default About;
