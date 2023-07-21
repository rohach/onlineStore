import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import { Alert, Rating } from '@mui/material';
import './singleproduct.css';

const SingleProduct = _id => {
  // Cart
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const [product, setPopular] = useState([]);
  useEffect(() => {
    console.log(product);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => {
        setPopular(json);
      });
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <div className="product-detail">
        <div className="container mt-4 texty" style={{ marginBottom: '35px' }}>
          <button className="btn  product_back btn_secondary" type="button">
            <Link to="/products" className="product_back_text">
              <i class="fas fa-arrow-left"></i> &nbsp;Back
            </Link>
          </button>
          {loading ? (
            <p />
          ) : error ? (
            <Alert variant="danger"></Alert>
          ) : (
            <Row>
              <Col md={4}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fluid
                  className="product_image"
                ></Image>
              </Col>
              <Col md={5}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{product.title}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{ fontWeight: 'bold' }}>Price: &nbsp;</span>$
                    {product.price}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{ fontWeight: 'bold' }}>
                      Description: &nbsp;
                    </span>
                    {product.description}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{ fontWeight: 'bold' }}>Category: &nbsp;</span>
                    <span style={{ textTransform: 'capitalize' }}>
                      {product.category}
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>$ {product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>Available</Col>
                      </Row>
                    </ListGroup.Item>
                    {product.price > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <Form.Control
                              as="select"
                              value={qty}
                              onChange={e => setQty(e.target.value)}
                            >
                              {[...Array(product.stock).keys()].map(x => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}
                    <ListGroup.Item className="atc">
                      <button
                        className="btn btn-dark atc btn_primary"
                        type="button"
                        disabled={product.stock === 0}
                      >
                        Add to Cart
                      </button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          )}
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
