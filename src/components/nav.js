import React from 'react';
import {Navbar, Nav, NavItem, MenuItem,NavbarBrand, NavbarCollapse} from 'react-bootstrap';

const PageNav = () => {
  return (
  <Navbar collapseOnSelect fixedTop className="nav-1">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#"><img src="./images/praize-logo-color.png"/></a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav className="pull-right">
        <NavItem eventKey={2} href="#"><strong>Become a Photographer</strong></NavItem>
        <NavItem eventKey={2} href="#"><strong>Help</strong></NavItem>
        <NavItem eventKey={2} href="#"><strong>Sign Up</strong></NavItem>
        <NavItem eventKey={3} href="#"><strong>Sign In</strong></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default PageNav;
