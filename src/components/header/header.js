import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

// ADDED FOR REACT SCROLL TRIAL
import {Link} from 'react-scroll'; 
const Header = () => {
  return (

 <Navbar collapseOnSelect fixed='top' bg="dark" variant="dark" expand="md">
<Container>
<Navbar.Brand><Link to="details">Best Cleaner</Link></Navbar.Brand>
<Navbar.Toggle aria-controls='responsive-navbar-nav' />
<Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link activeClass="active" to="details" spy={true} smooth={true} >Home</Link></Nav.Link>
      <Nav.Link><Link to="help" spy={true} smooth={true}>Support</Link></Nav.Link>
      <Nav.Link><Link to="recommendations" spy={true} smooth={true}>Recommendations</Link></Nav.Link>
      <Nav.Link><Link to="services" spy={true} smooth={true}>Services</Link></Nav.Link>
      <Nav.Link><Link to="about-nancy" spy={true} smooth={true}>About Me</Link></Nav.Link>
      <Nav.Link><Link to="procedure" spy={true} smooth={true}>Procedure</Link></Nav.Link>

      
      <NavDropdown.Divider />
      <Nav.Link><Link to="Footer" spy={true} smooth={true}>Contact</Link></Nav.Link>
    </Nav>
    </Navbar.Collapse>
 </Container>
 </Navbar>
    
  )
}

export default Header; 



// href="/carousels"
// href="/help"
// href="/recommendations"
// href="/services"
// href="/about"
// href="/procedure"