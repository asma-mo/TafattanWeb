import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Navbar.css';

const NavbarC = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="d-flex justify-content-between">
        <div className="menu-icon">
          
        </div>
        <Navbar.Brand href="#home" className="mx-auto">
          {/* تفطّن */}
          <img src="https://i.ibb.co/1G5LpjLH/Screenshot-2025-03-11-at-3-16-55-AM.png" width="65" height="50"  />
          
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarC;