import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './Product.css'
// import Button from "@restart/ui/esm/Button";





const Product = ({product,history,match}) => {
    // const addToCartHandler = () => {

    //     history.push(`/cart/${match.params.id}`)
    
    //   }
    
    return (
        <Card className='my-3 p-2 rounded'>
            <Link  to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'/>      
            </Link>
            <Card.Body>
                <Link className='product-name' to={`/product/${product._id}`}>
                    <Card.Title>
                        {product.name}
                    </Card.Title>
                </Link>
                <Card.Text>
                    {`${product.price}$`}
                </Card.Text>
            </Card.Body>
            {/* <Button 
              onClick={addToCartHandler}
              className="btn-block general-btn bg-orange add-btn" type='button'>
                افزودن به سبد خرید
              </Button> */}
        </Card>
    )
}

export default Product
