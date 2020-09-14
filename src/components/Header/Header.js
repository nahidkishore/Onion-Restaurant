import React from 'react';
import { Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href= ""><img src="../Resource/logo2.png" alt=""/></Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#"><FontAwesomeIcon icon={faCartPlus} /></Nav.Link>
      <Nav.Link href="#">Login</Nav.Link>
      <Nav.Link href="#">Signup</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
 
  );
};

export default Header;