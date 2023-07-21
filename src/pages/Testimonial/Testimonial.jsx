import React from 'react';
import './testimonial.css';
import Lottie from 'lottie-react';
import happy from '../../animations/happy.json';

const Testimonial = () => {
  return (
    <section>
      <div className="testimonial">
        <div className="testimonital_left">
          <h3>Testimonial</h3>
          <h2>
            What out <span style={{ color: 'var(--orange)' }}>customers</span>{' '}
            are saying
          </h2>
          <p>
            <div style={{ marginBottom: '0.1rem' }}>
              Your feedback is the heartbeat of our success! We cherish every
              word you share, turning your voices into the driving force behind
              our constant evolution. Like a compass, your thoughts guide us
              towards perfection, ensuring we exceed your wildest expectations!
            </div>
            <br />
            <div style={{ marginBottom: '0.1rem' }}>
              Your experiences are the brushstrokes that paint our canvas of
              improvement. With each comment, suggestion, and review, we refine
              and redefine, striving to create an extraordinary journey for you.
              Your satisfaction is our North Star, and your criticisms are our
              stepping stones to greatness. We embrace every challenge, turning
              setbacks into stepping stones to reach new heights of excellence.
            </div>
            <br />
            Together, we weave a tapestry of trust and transparency. Your
            valuable insights empower us to tailor our services to your desires,
            making your dreams a tangible reality.
          </p>
        </div>
        <div className="testimonital_right">
          <Lottie animationData={happy} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
