import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { Row, Image, ListGroup, Col, } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import {singleProductAction} from '../action/productAction'

const SingleProduct = ({history, match}) => {
  const dispatch = useDispatch()

  const productDetail = useSelector((state) => state.productDetail)
  const {loading, product} = productDetail

  useEffect(() => {
    dispatch(singleProductAction(match.params.id))
     
  }, [dispatch, match])

  const addToCartHandler = () => {

    history.push(`/cart/${match.params.id}`)

  }


  
  return (
    <div>
      <Link to="/" className="my-3 btn btn-light">
        بازگشت به صفحه قبل 
      </Link>
      {loading ? <h2>در حال دریافت محصول ...</h2> :       
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name} </h3>
            </ListGroup.Item>
            <ListGroup.Item> {product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Button 
              onClick={addToCartHandler}
              className="btn-block general-btn bg-orange" type='button'>
                افزودن به سبد خرید
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>}

    </div>
  );
};

export default SingleProduct;
