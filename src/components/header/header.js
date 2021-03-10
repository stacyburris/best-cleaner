import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header () {

return (

  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Best Cleaner</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/help">How I Help</Nav.Link>
      <Nav.Link href="/recommendations">Recommendations</Nav.Link>
      <NavDropdown title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/services">Kitchen</NavDropdown.Item>
        <NavDropdown.Item href="/services">Bathroom</NavDropdown.Item>
        <NavDropdown.Item href="/services">Living Room</NavDropdown.Item>
        <NavDropdown.Item href="/services">Bedrooms</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/services">Extras</NavDropdown.Item>
      </NavDropdown>
            <Nav.Link href="/about">About Me</Nav.Link>
      <Nav.Link href="/procedure">The Procedure</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="/footer">Contact Me</Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
  
);
}

export default Header;