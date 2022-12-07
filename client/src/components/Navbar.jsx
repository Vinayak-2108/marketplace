import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">MarketPlace</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavLink to="/">Home</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MyNavbar;