import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import pc from "../assets/shoppeal.jpg";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#">
        <img src={pc} style={{ width: "100px" }} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      
        <Nav className="mr-auto">
          <Nav.Link as={HashLink} to={"/#home"}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={"/services"}>
            Services
          </Nav.Link>
          <Nav.Link as={Link} to={"/contact"}>
            Contact
          </Nav.Link>
          <Nav.Link as={HashLink} to={"/#about"}>
            About Us
          </Nav.Link>
          <Nav.Link as={HashLink} to={"/dashboard"}>
            Dashboard
          </Nav.Link>
          <Nav.Link as={HashLink} to={"/profile"}>
            Profile
          </Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Login" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to={"/Login"}>
              User
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/Adminlogin"}>
              Admin
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
