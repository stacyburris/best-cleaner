import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './header.scss';

// ADDED FOR REACT SCROLL TRIAL
import {Link} from 'react-scroll'; 
const Header = () => {
  return (
<>
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

 <Card>
   <div id="welcome-header">
 <Card.Header>Your "Best" Clean Yet!</Card.Header>
 <Card.Body>
   <blockquote className="blockquote mb-0">
     
       {' '}
       <h1 className="header">Best Cleaner</h1>{' '}

     <footer>
     <p>Your free time wasn't made for housework</p>
     </footer>
     <Button variant="outline-info">
  <Nav><Link to="Footer" spy={true} smooth={true}>Contact</Link></Nav>
</Button>

   </blockquote>
 </Card.Body>
 </div>
</Card>
    </>
  )
}

export default Header; 



// href="/carousels"
// href="/help"
// href="/recommendations"
// href="/services"
// href="/about"
// href="/procedure"