import React from 'react';
import Lottie from 'lottie-react';
import delivery from '../../animations/delivery.json';
import './contact.css';

const Contact = () => {
  return (
    <section>
      <div className="contact">
        <div className="contact_left">
          <Lottie animationData={delivery} />
        </div>
        <div className="contact_right">
          <form action="post"></form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
