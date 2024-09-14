import { Navbar, Nav, Container } from 'react-bootstrap';
import '../assets/css/navbar.css'; 

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="shadow-sm">
      <Container>
        {/* Replace with your logo */}
        <Navbar.Brand href="#">
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
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            <Nav.Link href="#services" className="nav-link">Coaches</Nav.Link>
            <Nav.Link href="#services" className="nav-link">Blogs</Nav.Link>
            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
