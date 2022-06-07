import  React from "react";
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Navigation(){
    return(
      <>
     
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand >< img className="Logo" src={Logo}/> Olive Skin</Navbar.Brand>
    <Nav className="me-auto"> 
    <Nav.Link  className="home">
      <Link  to="/">Home</Link>
      </Nav.Link>
      <Nav.Link  className="products">
      <Link  to="/products">Products</Link>
      </Nav.Link>
      <Nav.Link  className="testimonials">
      <Link  to="/testimonials">Testimonials</Link>
      </Nav.Link>
    </Nav>
    </Container>
  </Navbar>    
    </>
      
    )
}

export default Navigation;