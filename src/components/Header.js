import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-white f-bold">
          Scheduler
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-white f-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-white f-bold">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="text-white f-bold">
              Contact
            </Nav.Link>
            <Nav.Link href="#link" className="text-white f-bold">
              Privacy Policy
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
