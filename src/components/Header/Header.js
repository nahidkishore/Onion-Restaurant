import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleSignOut } from '../Login/LoginManager';
import logo from '../../components/Resource/logo.png'

const Header = () => {

  const [loggedInUser, setLoggedInUser]=useContext(UserContext);

  let history = useHistory();

  const handleLoggingButton = () => {
    if (loggedInUser.name) {
      handleSignOut();
      setLoggedInUser({});
      history.push("/");
    } else {
      history.push("/login");
    }
  };

  
  return (
   <div>
      <Navbar bg="dark" variant="dark" >
    <Navbar.Brand className="brand" href= ""><Link to="/"><img src={logo} alt=""/></Link></Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#"><FontAwesomeIcon icon={faCartPlus} /></Nav.Link>
    
      <Nav.Link href="">Contact Us</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="ml-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    <Nav.Link href=""><p style={{color: 'yellow', weight: 'normal'}}> {loggedInUser.displayName}</p></Nav.Link>

    <Nav.Link onClick={handleLoggingButton}  href="" > <Button  variant="success"> {loggedInUser.name ? "Logout" : "Login"}</Button>
    </Nav.Link>
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