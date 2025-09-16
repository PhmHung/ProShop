import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Col, Row } from 'react-bootstrap';
import Paginate from '../components/Paginate';
//import axios from 'axios';
import { listProducts } from '../actions/productsAction';
import { useParams } from 'react-router-dom';

const HomeScreen = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const { pageNumber } = useParams() || 1;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={pages} page={page} keyword={keyword || ''} />
        </>
      )}
    </>
  );
};
export default HomeScreen;
