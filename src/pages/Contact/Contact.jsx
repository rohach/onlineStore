import React from 'react';
import Lottie from 'lottie-react';
import contact from '../../animations/contact.json';
import './contact.css';

const Contact = () => {
  return (
    <section>
      <div className="contact">
        <div className="contact_left">
          <Lottie animationData={contact} />
        </div>
        <div className="contact_right">
          <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
              <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div className="formbold-mb-5">
                  <label htmlFor="name" className="formbold-form-label">
                    {' '}
                    Full Name{' '}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="formbold-form-input"
                  />
                </div>

                <div className="formbold-mb-5">
                  <label htmlFor="email" className="formbold-form-label">
                    {' '}
                    Email Address{' '}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="formbold-form-input"
                  />
                </div>

                <div className="formbold-mb-5">
                  <label htmlFor="subject" className="formbold-form-label">
                    {' '}
                    Subject{' '}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter your subject"
                    className="formbold-form-input"
                  />
                </div>

                <div className="formbold-mb-5">
                  <label htmlFor="message" className="formbold-form-label">
                    {' '}
                    Message{' '}
                  </label>
                  <textarea
                    rows="6"
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    className="formbold-form-input"
                  ></textarea>
                </div>

                <div>
                  <button className="formbold-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
