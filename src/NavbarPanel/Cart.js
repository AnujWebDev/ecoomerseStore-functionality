import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../Store/CartSlice';
const Cart = () => {
  const dispatch= useDispatch();
  const products=useSelector(state=>state.cart)
  const removeToCart=(id)=>{
    dispatch(remove(id))
  }
  const productCart=products.map(product=>(
    <div className='col-md-12 mb-5'>
            <Card key={product.id} className='h-100'>
                <div className='text-center'>
                 <Card.Img variant="top" src={product.image} style={{ width: '150px', height:"125px" }}/>
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.price}
                     </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button  onClick={()=>removeToCart(product.id)} variant="danger">Remove</Button>
                </Card.Footer>
            </Card>
        </div>
  ))
  return (  
    <div className='container'>
        <div className='row'>
            {productCart}
        </div>
    </div>
  )
};

export default Cart;
