import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";

import { addToCart, remveFromCart } from "../action/cartAction";

const Cart = ({ match }) => {
  const productId = match.params.id;

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId))
    }
  }, [dispatch, productId])

const removeItemFromCartHandler = (id) =>{
    dispatch(remveFromCart(id))
}

  return (
    <div>
      <Row>
        <Col md={8}>
          <h3>سبد خرید</h3>
          {cartItems.length === 0 ? (
            <p>سبد خرید خالی است</p>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}> {item.name}</Col>
                    <Col md={2}> قیمت:{item.price} </Col>
                    <Col md={2}>
                      <Button type='button' variant='flat' onClick={()=> removeItemFromCartHandler(item.product)}>
                        <i className={"fa fa-trash"} />{" "}
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
            <Card>
                مجموع: {cartItems.reduce((acc, item) => acc + item.price , 0)}
            </Card>

        </Col>
      </Row>
    </div>
  );
};

export default Cart;
