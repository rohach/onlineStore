import React from 'react';
import './testimonial.css';
import Lottie from 'lottie-react';
import delivery from '../../animations/delivery.json';

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            doloribus cupiditate. Est minima sequi praesentium libero voluptatum
            vel, magni aperiam. A necessitatibus quos quo, quisquam nostrum at
            excepturi ab laboriosam?
          </p>
        </div>
        <div className="testimonital_right">
          <Lottie animationData={delivery} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
