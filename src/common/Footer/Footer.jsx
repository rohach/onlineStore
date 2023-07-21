import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer_inner">
        <div className="first">
          <h3>Online Store</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
            sunt.
          </p>
        </div>
        <div className="second">
          <h3>Delivery Time</h3>
          Sunday - Thursday 10.00am - 11:00pm Friday - Saturday Off day
        </div>
        <div className="third">
          <h3 style={{ marginBottom: '1rem' }}>Contact</h3>
          Location: Hetauda-7, Makwanpur, Nepal{' '}
          <b>Phone: +977-9876543210 Email: example@gmail.com</b>
        </div>
        <div className="fourth">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter</p>
          {/* <div className="newsletter_btn">
            <input type="text" />
            <button>Send</button>
          </div> */}
        </div>
      </section>
      <section className="footer_outer">
        <div className="footer_copyright">
          Copyright - 2023. All Rights Reserved.
        </div>
        <div className="footer_links">abcd</div>
      </section>
    </div>
  );
};

export default Footer;
