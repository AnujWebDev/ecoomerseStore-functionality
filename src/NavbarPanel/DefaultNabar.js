import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./defaultNavbar.css"
const DefaultNabar = () => {
  const items =useSelector(state=>state.cart)
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Store Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={{textDecoration:"None",color:"#fff",fontSize:"20px" ,border:"1px solid black",padding:"5px",borderRadius:"10px"}} id="Home" to="/" >Home</Link>
          </Nav>
          <Nav>
            <Link style={{textDecoration:"None",color:"#fff",fontSize:"20px" ,border:"1px solid black",padding:"5px",borderRadius:"10px"}} id="cart" to="/cart">My Bag {items.length}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default DefaultNabar
