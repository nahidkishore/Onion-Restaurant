import React from 'react';
import { Button, Container, Form, FormControl, Jumbotron, Nav, Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Header.css';


const Header = () => {
  return (
   <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href= ""><img src="../Resource/logo2.png" alt=""/></Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#"><FontAwesomeIcon icon={faCartPlus} /></Nav.Link>
      <Nav.Link href="#">Login</Nav.Link>
      <Nav.Link href="#">Signup</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="ml-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

<section className="banner">

           <h1>Best food waiting for your belly</h1><br/>
          <Form inline>
          <FormControl type="text"  placeholder="Search Foods... " className="form-control " />
          <Button variant="outline-danger">Search</Button>
          </Form>

</section>
 
   </div>
  
 
  );
};

export default Header;