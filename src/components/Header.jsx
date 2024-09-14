import { Navbar, Nav, Container } from 'react-bootstrap';
import '../assets/css/navbar.css'; 
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="shadow-sm">
      <Container>
        {/* Replace with your logo */}
        <Navbar.Brand to="#">
          <img
            src="images/FMFwhitelogo.svg"
            width="80"
            height="60"
            className="d-inline-block align-top"
            alt="Logo"
          /> 
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/coaches" className="nav-link">
              Coaches
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              Blogs
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
