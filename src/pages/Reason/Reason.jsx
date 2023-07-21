import React from 'react';
import './reason.css';
import Lottie from 'lottie-react';
import why from '../../animations/why.json';

const Reason = () => {
  return (
    <section>
      <div className="reason">
        <div className="reason_left">
          <Lottie animationData={why} />
        </div>
        <div className="reason_right">
          <h1>
            Why <span style={{ color: 'var(--orange)' }}>Online Store?</span>
          </h1>
          <p>
            Why pick us? We're not your average store; we're an exhilarating
            retail extravaganza! Unleash your shopping desires with our vast
            array of top-notch products that cater to every taste and lifestyle.
          </p>
          <div className="quality">
            <h6>
              <i class="ri-check-double-line"></i> Trendy products{' '}
            </h6>
            <p>
              We update our store regularly so that our customers can find
              products according to their needs.
            </p>
          </div>
          <div className="quality">
            <h6>
              <i class="ri-check-double-line"></i> Quality support{' '}
            </h6>
            <p>
              We ensure that you do not feel difficulty and hence provide 24/7
              customer support.
            </p>
          </div>
          <div className="quality">
            <h6>
              {' '}
              <i class="ri-check-double-line"></i> Order from any location
            </h6>
            <p>Our delivery partners will reach out to you on your doorstep.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
