import React from 'react';
import './about.css';
import home from '../../images/home.png';

const About = () => {
  return (
    <section>
      <div className="about">
        <h3>What we serve</h3>
        <h2>
          Just sit back at home <br /> we will take care
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione unde
          suscipit, aut, sapiente illo exercitationem, adipisci ducimus
          veritatis dolores rerum numquam corporis corrupti porro repellendus.
        </p>
      </div>
      <div className="about_detail">
        <div className="about_inner">
          <img src={home} alt="Quick delivery" />
          <h3>Quick Delivery</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
            ipsa.
          </p>
        </div>
        <div className="about_inner">
          <img src={home} alt="Quick delivery" />
          <h3>Quick Delivery</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
            ipsa.
          </p>
        </div>
        <div className="about_inner">
          <img src={home} alt="Quick delivery" />
          <h3>Quick Delivery</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
            ipsa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
