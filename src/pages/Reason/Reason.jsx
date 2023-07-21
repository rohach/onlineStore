import React from 'react';
import './reason.css';
import Lottie from 'lottie-react';
import delivery from '../../animations/delivery.json';

const Reason = () => {
  return (
    <section>
      <div className="reason">
        <div className="reason_left">
          <Lottie animationData={delivery} />
        </div>
        <div className="reason_right">
          <h1>
            Why <span style={{ color: 'var(--orange)' }}>Online Store?</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            suscipit impedit pariatur corrupti sed vel ipsam cum minima veniam
            vero, doloribus amet nobis eius odit deleniti soluta esse quos est?
          </p>
          <div className="quality">
            <h4>Trendy products </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              hic.
            </p>
          </div>
          <div className="quality">
            <h4>Quality support </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              hic.
            </p>
          </div>
          <div className="quality">
            <h4>Order from any location</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              hic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
