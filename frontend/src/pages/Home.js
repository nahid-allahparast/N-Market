import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch,useSelector } from 'react-redux'

import Product from "../components/Product/Product";
import { productListAction } from "../action/productAction";

const Home = () => {

  const productList = useSelector((state) => state.productList)

  const {loading, products } = productList

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(productListAction())
  
  }, [dispatch])

  return (
    <div>
      <h1>محصولات</h1>
      {loading ? <h2>در حال دریافت اطلاعات ...</h2> :
      <Row>
      {products.map((item) => {
        return (
          <Col key={item._id} sm={6} md={3} l={2}>
            <Product product={item} />
          </Col>
        );
      })}
    </Row>}
      
    </div>
  );
};

export default Home;
