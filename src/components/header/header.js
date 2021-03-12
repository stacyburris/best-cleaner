import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    
 <Navbar collapseOnSelect fixed='top' bg="dark" variant="dark" expand="md">
<Container>
<Navbar.Brand href="/">Best Cleaner</Navbar.Brand>
<Navbar.Toggle aria-controls='responsive-navbar-nav' />
<Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/help">Support</Nav.Link>
      <Nav.Link href="/recommendations">Recommendations</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/about">About Me</Nav.Link>
      <Nav.Link href="/procedure">Procedure</Nav.Link>

      
      <NavDropdown.Divider />
      <Nav.Link href="/footer">Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
 </Container>
 </Navbar>
    
  )
}

export default Header; 


// trial

// function Header () {
// // const [onToggleNav, setOnToggleNav] = useState(false);

// // const displayDropDown = ()=>{
// //   setOnToggleNav(true);
// // }



{/* 
    {(displayDropDown) ?
          <NavDropdown title="View All" >{onToggleNav}bghhfbht
          <NavDropdown title="This is inside " id="collasible-nav-dropdown">
          <NavDropdown.Item href="/services">Kitchen</NavDropdown.Item>
          <NavDropdown.Item href="/services">Bathroom</NavDropdown.Item>
          <NavDropdown.Item href="/services">Living Room</NavDropdown.Item>
          <NavDropdown.Item href="/services">Bedrooms</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/services">Extras</NavDropdown.Item>
        </NavDropdown>          
          
          </NavDropdown> :  <NavDropdown>meow</NavDropdown>

        } */}


// searchbar option

{/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}