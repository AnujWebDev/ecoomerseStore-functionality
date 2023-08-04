import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/CartSlice';
import { getProducts } from '../Store/productSlice';
import Spinner from 'react-bootstrap/Spinner';
import "./products.css"


const Products = () => {
    const dispatch = useDispatch();
    const [page,setPage]=useState(1);
    const {data:Products,status}= useSelector(state=>state.product)
    
    useEffect(()=>{
        setTimeout(()=>{dispatch(getProducts())});
    },[]);

    if(status==="loading"){
        return(
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    if(status==="Error"){
        return(
            <h1>SOMETHING WENT WRONG</h1>
        )
    }
    
    const addToCart=(product)=>{
        dispatch(add(product))
    }

    const Cards=Products.slice(page*6-6,page*6).map(product=>(
        <div className='col-md-4 mb-5'>
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
                    <Button onClick={()=>addToCart(product)} variant="primary">Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
    const selectedPage=(selectePage)=>{
        if(selectePage>=1 && selectePage <= Math.ceil(Products.length / 6) && selectePage !== page){
        setPage(selectePage);
        }
    }

  return (
    <div className='container'>
        <div className='row'>
            {Cards}
        </div>
        {Products.length > 0 && <div>
                <span onClick={()=>selectedPage(page - 1)} id="prev">prev</span>
                {[...Array(Math.ceil(Products.length / 6))].map((_,i)=>{
                return (<span className={page===i+1?"paginationSelect":""} id="currentPage" onClick={()=>selectedPage(i + 1)} key={i}>{ i + 1 }</span>)
                })}
                <span onClick={()=>selectedPage(page + 1)} id="next">Next</span>
            </div>}
    </div>
  )
}

export default Products;
