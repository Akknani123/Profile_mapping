import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 // Optional: For additional custom styling
import { Container, Navbar, Nav, Form, FormControl, Image } from 'react-bootstrap';
import logo from './logo.jpg'; // Make sure logo.jpg is in the same folder as this file
import profilelogo from './profilelogo.png'; // Make sure profilelogo.png is in the same folder as this file

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="py-3">
      <Container fluid>
        {/* Left Side - Logo and Profile Name */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <Image
            src={logo}
            alt="Profile Logo"
            className="rounded-circle"
            height="40"
            width="40"
          />
          <span className="ms-2">Profile</span>
        </Navbar.Brand>

        {/* Middle - Search Bar */}
        <Form className="d-flex mx-auto" style={{ width: '40%' }}>
          <FormControl
            type="search"
            placeholder="Search..."
            className="me-2"
            aria-label="Search"
          />
        </Form>

        {/* Right Side - User Profile */}
        <Nav>
          <Nav.Link href="#">
            <Image
              src={profilelogo}
              alt="User Profile"
              className="rounded-circle"
              height="40"
              width="40"
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
