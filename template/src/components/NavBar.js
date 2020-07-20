import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import LogoImg from "../logo.svg"

export const NavigationBar = () => (
  <Navbar variant="dark" bg="dark" expand="lg" fixed="top">
  <Navbar.Brand href="/">
     <img
        src={LogoImg}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="COMPANY BRAND"
      /> COMPANY BRAND</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      
    <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
  
);

export default NavigationBar;
