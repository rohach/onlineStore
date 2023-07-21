import React, { useEffect, useState } from 'react';
import './sampleproducts.css';
import { Link } from 'react-router-dom';

const Sampleproducts = () => {
  const [product, setPopular] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setPopular(json);
      });
  }, []);
  return (
    <section className="sampleproducts">
      <h2>
        Our Recent <span style={{ color: 'var(--orange)' }}>Products!</span>
      </h2>
      <div className="row" style={{ marginTop: '2rem' }}>
        {product
          .slice(0, 4)
          .filter(result => {
            return search.toLowerCase() === ''
              ? result
              : result.title.toLowerCase().includes(search) ||
                  result.category.toLowerCase().includes(search);
          })
          .map(result => {
            return (
              <>
                <div className="col-lg-3 product">
                  <div className="card card-margin" key={result.id}>
                    <div className="card-header no-border">
                      <small>
                        <h5 className="card-title">{result.category}</h5>
                      </small>
                    </div>
                    <div className="product_img">
                      <img src={result.image} alt={result.title} />
                    </div>
                    <div className="card-body pt-0">
                      <div className="widget-49">
                        <div className="widget-49-title-wrapper">
                          <div className="widget-49-date-primary">
                            <span className="widget-49-date-day">
                              {result.rating.rate}
                            </span>
                            <span className="widget-49-date-month">⭐</span>
                          </div>
                          <div className="widget-49-meeting-info">
                            <span className="widget-49-pro-title product_title">
                              <b>{result.title}</b>
                            </span>
                            <span className="widget-49-meeting-time">
                              ${result.price}
                            </span>
                          </div>
                        </div>
                        <div className="product_description">
                          <small>{result.description}</small>
                        </div>

                        <div className="widget-49-meeting-action">
                          <Link
                            to="/products"
                            href="#"
                            className="btn btn-sm btn-flash-border-primary buy_now btn_primary no_hover"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <hr />
    </section>
  );
};

export default Sampleproducts;
